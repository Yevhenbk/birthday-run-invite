# 📧 EmailJS Setup Guide for Photo Uploads

## 🚀 Quick Setup (5 minutes)

### 1. Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for free account
3. Verify your email

### 2. Create Email Service
1. In EmailJS dashboard → **Email Services**
2. Click **Create New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your email account
5. Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. **Template Name**: `Birthday Run Photo Upload`
4. **Template Content**:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; max-width: 600px;">
  <div style="background: linear-gradient(135deg, #3b82f6, #06b6d4); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
    <h2 style="margin: 0; font-size: 24px;">🏃‍♀️ Andrea's Birthday Run</h2>
    <p style="margin: 5px 0 0 0; opacity: 0.9;">Nueva foto recibida</p>
  </div>
  
  <div style="border: 1px solid #e5e7eb; border-top: none; padding: 20px; border-radius: 0 0 10px 10px;">
    <div style="margin-bottom: 20px;">
      <h3 style="color: #1f2937; margin: 0 0 10px 0;">📸 Detalles de la foto:</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; background: #f9fafb; border: 1px solid #e5e7eb; font-weight: bold;">Archivo:</td>
          <td style="padding: 8px; border: 1px solid #e5e7eb;">{{photo_name}}</td>
        </tr>
        <tr>
          <td style="padding: 8px; background: #f9fafb; border: 1px solid #e5e7eb; font-weight: bold;">Tamaño:</td>
          <td style="padding: 8px; border: 1px solid #e5e7eb;">{{photo_size}}</td>
        </tr>
        <tr>
          <td style="padding: 8px; background: #f9fafb; border: 1px solid #e5e7eb; font-weight: bold;">Fecha:</td>
          <td style="padding: 8px; border: 1px solid #e5e7eb;">{{upload_time}}</td>
        </tr>
      </table>
    </div>

    <div style="margin-bottom: 20px;">
      <h3 style="color: #1f2937; margin: 0 0 10px 0;">💬 Mensaje:</h3>
      <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
        {{message}}
      </div>
    </div>

    <div style="margin-bottom: 20px;">
      <h3 style="color: #1f2937; margin: 0 0 10px 0;">🖼️ Foto:</h3>
      <div style="text-align: center; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <img src="{{photo_data}}" alt="Birthday Run Photo" style="max-width: 100%; max-height: 400px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      </div>
    </div>

    <div style="text-align: center; color: #6b7280; font-size: 12px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
      📧 Enviado desde Birthday Run App<br>
      {{from_name}}
    </div>
  </div>
</div>
```

5. Save template and copy **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Copy **Public Key** (e.g., `user_abcdefgh123`)

### 5. Update Code
In `PhotoUpload.tsx`, replace these values:

```javascript
to_email: 'YOUR_EMAIL@example.com',     // ← Your email address
'YOUR_SERVICE_ID',                      // ← Service ID from step 2
'YOUR_TEMPLATE_ID',                     // ← Template ID from step 3  
'YOUR_PUBLIC_KEY'                       // ← Public key from step 4
```

## ✅ Example Configuration

```javascript
to_email: 'andrea@example.com',
'service_abc123',
'template_xyz789',
'user_abcdefgh123'
```

## 🎯 How It Works

1. User selects photo
2. Photo converts to base64
3. Email sends to your inbox with:
   - Photo as attachment/embedded
   - File details (name, size, time)
   - Base64 data you can save

## 📊 Free Limits
- **200 emails/month** on free plan
- **10MB** email size limit
- **Unlimited** recipients

## 🔧 Troubleshooting

- **Email not received**: Check spam folder
- **Large files fail**: Reduce image size (<5MB recommended)
- **Template errors**: Verify all template variables match

---
🎉 Once configured, photos will be sent directly to your email!