import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, locale } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Invalid email' },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // If Telegram credentials are missing, log warning but don't fail
    // (useful for development/testing)
    if (!botToken || !chatId) {
      console.warn('⚠️ Telegram credentials missing - email not sent to Telegram');
      console.log('Email submitted:', email, 'Locale:', locale);

      // Still return success so the form works without Telegram
      return NextResponse.json({
        success: true,
        warning: 'Telegram not configured'
      });
    }

    // Format date in locale-specific format
    const date = new Date();
    const dateStr = locale === 'ru'
      ? date.toLocaleString('ru-RU', { timeZone: 'Europe/Chisinau' })
      : date.toLocaleString('en-US', { timeZone: 'Europe/Chisinau' });

    // Prepare message
    const message = `🎯 Новый лид из чек-листа!

📧 Email: ${email}
🌐 Язык: ${locale === 'ru' ? 'Русский' : 'English'}
📅 Дата: ${dateStr}
🔗 URL: https://ddinisiuc.com/${locale}/lead-magnet`;

    // Send to Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
          disable_web_page_preview: true
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      throw new Error('Telegram API error');
    }

    console.log('✅ Lead sent to Telegram:', email);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error processing lead magnet submission:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal error'
      },
      { status: 500 }
    );
  }
}
