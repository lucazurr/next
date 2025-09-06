// Configurazione EmailJS
// Per configurare EmailJS:
// 1. Vai su https://www.emailjs.com/
// 2. Crea un account gratuito
// 3. Crea un nuovo servizio email (Gmail, Outlook, etc.)
// 4. Crea un template email
// 5. Sostituisci i valori qui sotto con i tuoi dati

export const emailConfig = {
  // Il tuo Service ID da EmailJS
  serviceId: "YOUR_SERVICE_ID",
  
  // Il tuo Template ID da EmailJS
  templateId: "YOUR_TEMPLATE_ID",
  
  // La tua Public Key da EmailJS
  publicKey: "YOUR_PUBLIC_KEY",
  
  // La tua email dove ricevere i messaggi
  toEmail: "tua-email@example.com"
};

// Esempio di template EmailJS:
// Subject: Nuovo messaggio dal sito web
// Body:
// Nome: {{name}}
// Email: {{email}}
// Messaggio: {{message}}