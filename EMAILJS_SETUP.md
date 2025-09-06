# Configurazione EmailJS per il Form di Contatto

Per far funzionare il form di contatto con la tua email, segui questi passaggi:

## 1. Crea un Account EmailJS

1. Vai su [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clicca su "Sign Up" e crea un account gratuito
3. Verifica la tua email

## 2. Configura il Servizio Email

1. Nel dashboard di EmailJS, vai su "Email Services"
2. Clicca "Add New Service"
3. Scegli il tuo provider email (Gmail, Outlook, Yahoo, etc.)
4. Segui le istruzioni per collegare la tua email
5. **Importante**: Annota il **Service ID** che viene generato

## 3. Crea un Template Email

1. Vai su "Email Templates"
2. Clicca "Create New Template"
3. Configura il template così:

**Subject (Oggetto):**
```
Nuovo messaggio dal sito web
```

**Content (Contenuto):**
```
Hai ricevuto un nuovo messaggio dal tuo sito web:

Nome: {{from_name}}
Email: {{from_email}}

Messaggio:
{{message}}

---
Inviato automaticamente dal form di contatto
```

4. **Importante**: Annota il **Template ID** che viene generato

## 4. Ottieni la Public Key

1. Vai su "Account" → "General"
2. Trova la sezione "Public Key"
3. **Importante**: Copia la **Public Key**

## 5. Configura il Progetto

1. Apri il file `src/emailConfig.js`
2. Sostituisci i valori placeholder con i tuoi dati:

```javascript
export const emailConfig = {
  serviceId: "IL_TUO_SERVICE_ID",        // Dal passo 2
  templateId: "IL_TUO_TEMPLATE_ID",      // Dal passo 3
  publicKey: "LA_TUA_PUBLIC_KEY",        // Dal passo 4
  toEmail: "tua-email@example.com"       // La tua email dove ricevere i messaggi
};
```

## 6. Test del Form

1. Salva le modifiche
2. Riavvia il server di sviluppo se necessario
3. Vai alla sezione "Contact" del sito
4. Compila e invia un messaggio di test
5. Controlla la tua email per verificare la ricezione

## Risoluzione Problemi

### Il form non invia
- Verifica che tutti i campi siano compilati
- Controlla la console del browser per errori
- Assicurati che i dati in `emailConfig.js` siano corretti

### Non ricevo email
- Controlla la cartella spam/junk
- Verifica che l'email in `toEmail` sia corretta
- Controlla che il servizio EmailJS sia attivo

### Errori di configurazione
- Verifica che Service ID, Template ID e Public Key siano corretti
- Assicurati che il template abbia i campi `{{from_name}}`, `{{from_email}}` e `{{message}}`

## Limiti del Piano Gratuito

- 200 email al mese
- Perfetto per siti web personali e piccole aziende
- Per volumi maggiori, considera l'upgrade a un piano a pagamento

## Sicurezza

- La Public Key può essere esposta nel codice frontend
- Service ID e Template ID non sono sensibili
- Non includere mai la Private Key nel codice frontend

---

**Nota**: Dopo aver configurato tutto, il form invierà automaticamente le email alla tua casella di posta ogni volta che qualcuno compila il modulo di contatto sul sito.