# 🌱 Agrochemical QR Code Product Verification System  

## 📌 Overview  
This project is a **QR Code Product Verification and Product Placement Website** built for **Bharat Bio Science**.  
It enables customers and distributors to scan QR codes printed on agrochemical products and instantly view product details such as manufacturing date, batch number, registration information, cautionary logo, and downloadable resources (leaflets, labels).  

Additionally, a **product placement website** was developed to showcase the company’s products.  

---

## 🚀 Features  
- ✅ **QR Code Generation & Scanning** – Generates unique QR codes for each product.  
- ✅ **Product Information Lookup** – Customers can scan and view details directly from the database.  
- ✅ **Cautionary Logos** – Displays mandatory safety and cautionary information for compliance.  
- ✅ **Leaflet & Label Downloads** – Product documents are easily accessible.  
- ✅ **Admin Backend** – Built with Express.js and PostgreSQL (hosted on Supabase).  
- ✅ **Frontend Product Website** – Clean, static product placement site built with HTML, CSS, and JavaScript.  

---

## 🛠️ Tech Stack  
- **Frontend**: HTML, CSS, JavaScript (Vanilla JS)  
- **Backend**: Node.js, Express.js  
- **Database**: PostgreSQL (Supabase)  
- **QR Code Generation**: `qrcode` (Node.js library)  
- **Hosting**:  
  - Frontend → Vercel  
  - Backend → Railway  
  - Database → Supabase  
- **File Storage**: Cloudinary (for product images & cautionary logos)  

---

## ⚙️ Installation & Setup  

### Clone the repository  
```bash
git clone https://github.com/your-username/agrochemical-qr-system.git
cd agrochemical-qr-system
```

### Install dependencies  
```bash
npm install
```

### Environment Variables  
Create a `.env` file in the root folder and add:  
```env
PORT=3998
FRONTEND_URL=https://bharatbio-science.vercel.app
BACKEND_URL=https://your-backend-url.onrender.com
DB_HOST=your-db-host
DB_PORT=5432
DB_USER=your-db-user
DB_PASS=your-db-pass
DB_NAME=your-db-name
```

### Run locally  
```bash
npm start
```

---


## 💡 How It Works  
1. Admin generates a QR code for each product (`/api/generate-qr/:productName/save`).  
2. QR code is printed on product packaging.  
3. Customers scan the QR code → Redirects to product info page.  
4. Product details, cautionary logo, and documents are fetched from the **Supabase database**.  

---

## 📦 Future Enhancements  
- 🔹 Admin dashboard for uploading products.  
- 🔹 Analytics to track product scans.  
- 🔹 Multi-language support for rural outreach.  

---

## 🏢 Client  
This project was developed as a **freelance solution for Bharat Bio Science (Agrochemical Company)**.  

---

## 👨‍💻 Author  
**Your Name**  
- 💼 [LinkedIn](https://linkedin.com/in/your-profile)  
- 🐙 [GitHub](https://github.com/your-username)  

---

✨ Feel free to ⭐ this repository if you found it useful!  
