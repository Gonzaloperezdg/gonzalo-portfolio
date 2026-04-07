import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message, drawing_url } = req.body;

    // Validar campos requeridos
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Campos requeridos faltantes' });
    }

    // Construir FormData para Formspree
    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    if (drawing_url) {
      formData.append('drawing_url', drawing_url);
    }

    // Enviar a Formspree desde el servidor
    const response = await fetch('https://formspree.io/f/meeppazv', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (!response.ok) {
      throw new Error(`Formspree error: ${response.status}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Error al enviar el formulario' });
  }
}
