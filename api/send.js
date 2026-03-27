import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, subject, message } = req.body;

  try {
    await resend.emails.send({
      from: "Intelnet <onboarding@resend.dev>",
      to: ["jmrdz1109@gmail.com"],
      subject: "Nuevo mensaje desde la web",
      html: `
        <h2>Nuevo mensaje desde la página web</h2>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${phone || "No proporcionado"}</p>
        <p><b>Asunto:</b> ${subject || "Sin asunto"}</p>
        <p><b>Mensaje:</b> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}