// URL DO GOOGLE APPS SCRIPT
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw8p37uJH523ZeWer6ErA7aBFe-uQTM61oMYGmu8TRgIqxvKPOJ539_OvQ7mxQ0UhX2/exec";

// Função simples de validação
function validateContact(data) {
  const errors = [];

  if (!data.name || data.name.trim().length < 2 || data.name.trim().length > 100) {
    errors.push({ field: "name", message: "Nome deve ter entre 2 e 100 caracteres" });
  }

  if (!data.phone || !/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(data.phone.trim())) {
    errors.push({ field: "phone", message: "Formato de telefone inválido. Use: (11) 99999-9999" });
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.push({ field: "email", message: "Email inválido" });
  }

  return errors;
}

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, phone, email } = req.body;

    // Validação
    const validationErrors = validateContact({ name, phone, email });
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Dados inválidos",
        errors: validationErrors,
      });
    }

    // 🔥 Envia para Google Script
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: name.trim(),
          telefone: phone.trim(),
          email: email.trim().toLowerCase(),
        }),
      });
    } catch (error) {
      console.error("Erro ao enviar para Google Script:", error);
      // Não quebra a API, apenas informa
    }

    return res.status(201).json({
      success: true,
      message: "Contato enviado com sucesso para a planilha!",
      data: { name, phone, email },
    });
  } catch (error) {
    console.error("Erro interno:", error);
    return res.status(500).json({
      success: false,
      message: "Erro interno do servidor",
    });
  }
}
