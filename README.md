# Andrea's Birthday Run Invite

A beautiful and interactive birthday run invitation app built with Next.js, featuring participant registration, photo uploads, and downloadable medal certificates.

## Features

- **📝 Registration Form**: Complete registration form with participant details
- **📸 Photo Upload**: Upload and email photos directly from the app
- **🏅 Digital Medal**: Downloadable personalized medal certificate
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🎨 Modern UI**: Beautiful gradients, animations, and interactive elements
- **📧 Email Integration**: Automatic email sending with EmailJS

## Live Demo

Visit the live app: [Andrea's Birthday Run Invite](https://andreas-birthday-run.vercel.app/)

## Tech Stack

- **Framework**: Next.js 15.5.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Form Handling**: Formspree + Custom validation

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yevhenbk/birthday-run-invite.git
   cd birthday-run-invite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # EmailJS Configuration
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   
   # Email Configuration
   NEXT_PUBLIC_RECIPIENT_EMAIL=your-email@example.com
   ```

4. **Configure EmailJS** (See [EmailJS Setup Guide](#-emailjs-setup))

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## EmailJS Setup

### 1. Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### 2. Create Email Service
1. In EmailJS dashboard → **Email Services**
2. Click **Create New Service**
3. Choose **Gmail** or **Outlook** (Outlook is more reliable)
4. Connect your email account and grant all permissions
5. Copy the **Service ID**

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use template ID: `template_9qj0yis` or create your own
4. Template variables: `{{photo_name}}`, `{{photo_size}}`, `{{upload_time}}`, `{{message}}`

### 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### 5. Update Environment Variables
Add all the IDs to your `.env.local` file

## Project Structure

```
birthday-run-invite/
├── src/
│   ├── app/
│   │   ├── medal/           # Medal page route
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main page
│   └── components/
│       ├── Header.tsx           # Welcome header
│       ├── FormSection.tsx      # Registration form
│       ├── PhotoUpload.tsx      # Photo upload with email
│       ├── MedalSection.tsx     # Medal download section
│       ├── MedalDisplay.tsx     # Medal SVG component
│       ├── Footer.tsx           # Simple footer
│       ├── BackgroundDecoration.tsx  # Visual effects
│       └── Logo.tsx             # Reusable logo
├── public/
│   └── logo.svg            # Static logo file
├── .env.local              # Environment variables
└── package.json            # Dependencies
```

## Component Features

### PhotoUpload Component
- **File Validation**: Supports JPG, PNG, GIF (max 5MB)
- **Preview**: Shows selected image before upload
- **Email Integration**: Sends photos via EmailJS
- **Progress Feedback**: Loading states and success messages

### MedalDisplay Component
- **Custom SVG**: Personalized medal with Andrea's name
- **Download Function**: Converts SVG to downloadable PNG
- **Responsive**: Scales beautifully on all devices

### FormSection Component
- **Validation**: Real-time form validation
- **Formspree Integration**: Handles form submissions
- **Responsive Design**: Mobile-optimized form layout

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

### Environment Variables in Production
Make sure to add all environment variables in your hosting platform:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_RECIPIENT_EMAIL`

## Pages

### Main Page (`/`)
- Registration form
- Photo upload section
- Medal download section
- Contact information

### Medal Page (`/medal`)
- Full-screen medal display
- Direct download functionality
- Shareable URL

## Usage

1. **Fill Registration Form**: Enter participant details
2. **Upload Photo**: Select and upload a race photo
3. **Download Medal**: Get your personalized completion certificate
4. **Share**: Share the medal page with friends

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Yevhen** - [GitHub](https://github.com/Yevhenbk)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Email service by [EmailJS](https://www.emailjs.com/)

---

**Happy Running! 🏃‍♀️🎉**
