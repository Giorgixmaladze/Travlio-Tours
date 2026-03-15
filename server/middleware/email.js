const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_API, // Use App Password instead of OAuth
    },
});





const sendWelcomeEmail = async (userEmail, userName, url) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: userEmail,
      subject: "მოგესალმებით Travlio-ზე! 🌍",
      text: `გამარჯობა ${userName}, გთხოვთ დაადასტუროთ თქვენი რეგისტრაცია ჩვენს პლატფორმაზე.`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 40px 20px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #111827; font-size: 28px; margin: 0;">მოგესალმებით Travlio-ზე! ✈️</h1>
          </div>
          <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; border-top: 4px solid #f97316;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-top: 0;">
              გამარჯობა <strong>${userName}</strong>,
            </p>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
              მიხარია, რომ შემოუერთდი ჩვენს სამოგზაურო პლატფორმას. შენი თავგადასავლები აქედან იწყება! გთხოვთ დაადასტუროთ თქვენი რეგისტრაცია ქვემოთ მოცემულ ღილაკზე დაჭერით.
            </p>
            <div style="text-align: center; margin: 35px 0;">
              <a href=${url} style="background-color: #f97316; color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block;">
                რეგისტრაციის დადასტურება
              </a>
            </div>
            <p style="color: #6b7280; font-size: 14px; margin-bottom: 0;">
              თუ თქვენ არ დაგირეგისტრირებიათ ეს ანგარიში, გთხოვთ უგულებელყოთ ეს წერილი.
            </p>
          </div>
          <div style="text-align: center; margin-top: 25px;">
            <p style="color: #9ca3af; font-size: 12px;">
              © ${new Date().getFullYear()} Travlio Tours. ყველა უფლება დაცულია.
            </p>
          </div>
        </div>
      `,
    });

    console.log("წერილი გაიგზავნა: %s", info.messageId);
  } catch (error) {
    console.error("შეცდომა გაგზავნისას:", error);
    throw error;
  }
}

module.exports = sendWelcomeEmail