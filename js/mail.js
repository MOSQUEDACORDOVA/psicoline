class Mailing {
  apiKey =
    "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";
  apiUrl = "https://api.sendgrid.com/v3/mail/send";
  constructor() {}

  body({ destinatario, subject, content }) {
    const data = {
      personalizations: [
        {
          to: [
            {
              email: destinatario,
            },
          ],
          subject,
        },
      ],
      from: {
        email: "psicolineatencion@gmail.com",
      },
      content: [
        {
          type: "text/plain",
          value: content,
        },
      ],
    };
    return data;
  }

  async send({ destinatario, subject, content }) {
    const data = this.body({ destinatario, subject, content });
    return await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error("Error:", error));
  }
}
