import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend('re_QWdB7C2m_5VfjccsTbviQiVgxYJQxEmJ1')

export async function POST(request: NextRequest) {
  try {
    const { contactInfo } = await request.json()

    if (!contactInfo || contactInfo.trim() === '') {
      return NextResponse.json(
        { error: 'İletişim bilgisi gereklidir' },
        { status: 400 }
      )
    }

    // E-posta gönderimi
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['tahayp76@gmail.com'],
      subject: 'Yeni İletişim Formu Mesajı',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
            Yeni İletişim Formu Mesajı
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Mesaj İçeriği:</h3>
            <p style="color: #333; line-height: 1.6; font-size: 16px;">
              ${contactInfo}
            </p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">
              Bu mesaj mmyazilim.com.tr web sitesindeki iletişim formundan gönderilmiştir.
            </p>
            <p style="color: #666; font-size: 14px;">
              Gönderim Tarihi: ${new Date().toLocaleString('tr-TR')}
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend API Error:', error)
      return NextResponse.json(
        { error: `E-posta gönderilirken bir hata oluştu: ${JSON.stringify(error)}` },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Mesajınız başarıyla gönderildi', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('API Route Error:', error)
    return NextResponse.json(
      { error: 'Sunucu hatası oluştu' },
      { status: 500 }
    )
  }
}