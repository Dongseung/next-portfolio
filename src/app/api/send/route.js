export default async function handler(req, res) {
  if (req.method === 'POST') {
      // 실제 이메일 전송 기능 주석 처리
      // try {
      //     const { email, subject, message } = req.body;

      //     const resend = new Resend(process.env.RESEND_API_KEY);
      //     const fromEmail = process.env.FROM_EMAIL;

      //     const { data, error } = await resend.emails.send({
      //         from: fromEmail,
      //         to: ["ttjh92@hanmail.net", email],
      //         subject: subject,
      //         react: (
      //             <>
      //                 <h1>{subject}</h1>
      //                 <p>Thank you for contacting me!</p>
      //                 <p>New message submitted</p>
      //                 <p>{message}</p>
      //             </>
      //         ),
      //     });

      //     if (error) {
      //         res.status(500).json({ error });
      //         return;
      //     }

      //     res.status(200).json(data);
      // } catch (error) {
      //     res.status(500).json({ error });
      // }

      // 실제 이메일 전송 기능을 비활성화하고 성공 메시지 반환
      res.status(200).json({ message: 'API endpoint hit, but email functionality is disabled.' });
  } else {
      res.status(405).json({ message: 'Method Not Allowed' });
  }
}
