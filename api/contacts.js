import mongoose from 'mongoose';

// Modelo Contact
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nome é obrigatório'],
    trim: true,
    maxlength: [100, 'Nome deve ter no máximo 100 caracteres']
  },
  phone: {
    type: String,
    required: [true, 'Telefone é obrigatório'],
    trim: true,
    validate: {
      validator: function(v) {
        return /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(v);
      },
      message: 'Formato de telefone inválido'
    }
  },
  email: {
    type: String,
    required: [true, 'Email é obrigatório'],
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Email inválido'
    },
    unique: true
  },
  status: {
    type: String,
    enum: ['novo', 'contatado', 'proposta_enviada', 'fechado'],
    default: 'novo'
  }
}, {
  timestamps: true
});

// Evita re-compilar o modelo se ele já existir
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// Função para conectar ao MongoDB
let isConnected = false;

async function connectDB() {
  if (isConnected) {
    return;
  }

  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI não está definida nas variáveis de ambiente');
    }

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB conectado com sucesso');
  } catch (error) {
    console.error('Erro ao conectar com MongoDB:', error);
    throw error;
  }
}

// Função de validação
function validateContact(data) {
  const errors = [];
  
  if (!data.name || data.name.trim().length < 2 || data.name.trim().length > 100) {
    errors.push({ field: 'name', message: 'Nome deve ter entre 2 e 100 caracteres' });
  }
  
  if (!data.phone || !/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(data.phone.trim())) {
    errors.push({ field: 'phone', message: 'Formato de telefone inválido. Use: (11) 99999-9999' });
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.push({ field: 'email', message: 'Email inválido' });
  }
  
  return errors;
}

export default async function handler(req, res) {
  // Configure CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    await connectDB();

    if (req.method === 'POST') {
      // Criar novo contato
      const { name, phone, email } = req.body;
      
      // Validar dados
      const validationErrors = validateContact({ name, phone, email });
      if (validationErrors.length > 0) {
        return res.status(400).json({
          success: false,
          message: 'Dados inválidos',
          errors: validationErrors
        });
      }

      // Verificar se já existe um contato com este email
      const existingContact = await Contact.findOne({ email: email.trim().toLowerCase() });
      if (existingContact) {
        return res.status(409).json({
          success: false,
          message: 'Já existe um contato cadastrado com este email'
        });
      }
      
      // Criar novo contato
      const contact = new Contact({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim().toLowerCase()
      });
      
      const savedContact = await contact.save();

      res.status(201).json({
        success: true,
        message: 'Contato cadastrado com sucesso!',
        data: {
          id: savedContact._id,
          name: savedContact.name,
          email: savedContact.email,
          createdAt: savedContact.createdAt
        }
      });

    } else if (req.method === 'GET') {
      // Listar contatos
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const contacts = await Contact.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .select('-__v');

      const total = await Contact.countDocuments();

      res.json({
        success: true,
        data: contacts,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      });

    } else {
      res.status(405).json({
        success: false,
        message: 'Method not allowed'
      });
    }

  } catch (error) {
    console.error('Erro na API de contatos:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
}
