export function ticketTemplate({
  name,
  eventDate,
  startTime,
  venue,
  ticketType,
  ticketId,
  qrImage,
}: {
  name: string;
  eventDate: string;
  startTime: string;
  venue: string;
  ticketType: string;
  ticketId: string;
  qrImage: string;
}) {
  return `
  <div style="font-family: Arial, sans-serif; background:#f7f7f7; ">
    <div style="
      max-width:600px;
      margin:auto;
      background:white;
      padding:30px 28px;
      border:1px solid #ececec;
      line-height:1.6;
    ">
      
      <h2 style="
        margin:0;
        font-size:24px;
        text-align:center;
      ">
        Your Ticket For ZË Fashion Event Has Been Confirmed 🎟️✨
      </h2>

      <img  src="cid:zeLogo" alt="ZË Logo" style="width:100%; margin:0 auto; display:block; margin-bottom:20px; margin-top:20px;" />

      <p style="margin-top:25px; font-size:16px;">
        Hello <strong>${name}</strong>,
      </p>

      <p style="font-size:16px;">
        Welcome to something different.  
        Your registration for the <strong>ZË Fashion × Creativity Exhibition STILL</strong> 
        is officially confirmed and we’re thrilled to have you.
      </p>

      <p style="font-size:16px;">
        This isn’t just another event.  
        It’s an immersive experience a moment where creativity, fashion, art, and atmosphere
        come alive in a way Abuja has never seen before.
      </p>

      <hr style="border:none; border-top:1px solid #eee; margin:26px 0;" />

      <h3 style="
        font-size:18px;
        margin-bottom:12px;
      ">
        Event Details
      </h3>

      <div style="
        background:#fafafa;
        padding:18px 20px;
        border-radius:10px;
        border:1px solid #eaeaea;
      ">
        <p style="margin:6px 0;"><strong>Date:</strong> ${eventDate}</p>
        <p style="margin:6px 0;"><strong>Time:</strong> ${startTime}</p>
        <p style="margin:6px 0;"><strong>Location:</strong> ${venue}</p>

        <p style="margin:6px 0;"><strong>Guest:</strong> ${name}</p>
        <p style="margin:6px 0;"><strong>Ticket Type:</strong> ${ticketType}</p>
        <p style="margin:6px 0;"><strong>Ticket ID:</strong> ${ticketId}</p>

        <p style="margin:6px 0;"><strong>Amount Paid:</strong> ₦0 (Free Entry)</p>
      </div>

      <hr style="border:none; border-top:1px solid #eee; margin:26px 0;" />

      <p style="font-size:16px;">
        Keep an eye on your email — more details, teasers, and what to expect will be sent as the day approaches.
      </p>

      <p style="
        margin-top:22px;
        font-size:17px;
        font-weight:600;
      ">
        We can’t wait to see you.  
        Welcome to ZË.
      </p>

      <div style="
        margin-top:20px;
        font-size:17px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:8px;
      ">
      <p>Your Ticket Qr Code</p>
      <img 
      src="${qrImage}"
      alt="QR Code"
      style="width:160px; display:block; margin:30px auto;"
      /></div>
      

    </div>
  </div>
  `;
}
