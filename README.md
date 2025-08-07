# 📅 React Calendar App

A modern, responsive calendar application built with React for agenda and event management. Features a Google Calendar-inspired design with light/dark theme support.

![React Calendar App](https://img.shields.io/badge/React-18.0+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.0+-purple.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-cyan.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🌐 Live Demo

**[🚀 View Live Demo](https://react-calender-app-psi.vercel.app/)**

Experience the full application with all features including event creation, theme switching, and responsive design.

## ✨ Features

### 🎯 Core Features
- **📅 Browse Calendar** - Interactive monthly calendar view with smooth navigation
- **➕ Create Events** - Advanced event creation with time, description, and color coding
- **👁️ View Event Details** - Click on dates to see detailed event information
- **🔄 Two View Modes**:
  - **Calendar View**: Traditional grid layout with sidebar
  - **List View**: Organized list showing all events by date
- **🌓 Light/Dark Theme Toggle** - Professional theme switching with system preference detection
- **💾 LocalStorage Integration** - Persistent data storage across browser sessions

### 🚀 Advanced Features
- **🎨 Color-Coded Events** - 6 different color options for event categorization
- **⏰ Time Management** - Optional time selection for events
- **📝 Event Descriptions** - Detailed event notes and descriptions
- **🗑️ Event Management** - Delete events with confirmation
- **📱 Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **⚡ Real-time Updates** - Instant UI updates with smooth animations

### 🎨 Design Features
- **Google Calendar-inspired** clean, modern interface
- **Professional color palette** for both light and dark modes
- **Smooth animations** and transitions
- **Touch-friendly** interactions on mobile devices
- **Accessibility** compliant with proper ARIA labels

## 🛠️ Technologies Used

- **React 19.1.0** - Modern React with hooks and functional components
- **Vite 7.0.4** - Fast build tool and development server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **react-calendar** - Professional calendar component
- **LocalStorage API** - Client-side data persistence
- **CSS3** - Custom styling with responsive design

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Step 1: Clone the Repository
```bash
git clone https://github.com/Rajeevgithu/React-Calender-App.git
cd React-Calender-App
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Step 4: Build for Production
```bash
npm run build
```

## 🎮 How to Use

### Creating Events
1. **Click on any date** in the calendar to open the event creation modal
2. **Fill in event details**:
   - Event title (required)
   - Time (optional)
   - Description (optional)
   - Choose event color
3. **Click "Create Event"** to save

### Managing Events
- **View Events**: Click on dates with events to see details
- **Delete Events**: Hover over events and click the delete button
- **Switch Views**: Use the toggle button to switch between calendar and list views
- **Theme Toggle**: Click the sun/moon icon to switch between light and dark themes

### Calendar Navigation
- **Month Navigation**: Use arrow buttons to navigate between months
- **Quick Actions**: Use the sidebar for quick event creation and viewing today's events

## 📁 Project Structure

```
react-calendar-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── CalendarView.jsx      # Main calendar component
│   │   ├── EventForm.jsx         # Event creation modal
│   │   ├── EventList.jsx         # Event display component
│   │   ├── ListView.jsx          # List view component
│   │   └── ThemeContext.jsx      # Theme management
│   ├── App.jsx                   # Main application component
│   ├── App.css                   # Application styles
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Application entry point
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── vite.config.js               # Vite configuration
└── README.md                    # Project documentation
```

## 🎨 Color Palette

### Light Mode
- **Background**: `#F9FAFB` (very light gray)
- **Primary Text**: `#111827` (gray-900)
- **Secondary Text**: `#6B7280` (gray-500)
- **Accent Color**: `#3B82F6` (blue-500)
- **Border/Divider**: `#E5E7EB` (gray-200)

### Dark Mode
- **Background**: `#1F2937` (gray-800)
- **Primary Text**: `#F3F4F6` (gray-100)
- **Secondary Text**: `#9CA3AF` (gray-400)
- **Accent Color**: `#60A5FA` (blue-400)
- **Border/Divider**: `#374151` (gray-700)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🌟 Key Features in Detail

### Event Management
- **Unique Event IDs** for reliable data management
- **Event Sorting** by time and date
- **Color Coding** with 6 different color options
- **Time Support** with optional time selection
- **Description Support** for detailed event notes

### User Experience
- **Intuitive Navigation** between calendar and list views
- **Visual Feedback** for all user interactions
- **Empty States** with helpful messaging
- **Event Counters** and statistics
- **Professional Icons** and visual elements

### Data Persistence
- **LocalStorage Integration** for data persistence
- **Automatic Saving** of all events
- **Data Recovery** on page reload
- **Cross-Session Storage** maintains data between browser sessions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rajeev** - [GitHub Profile](https://github.com/Rajeevgithu)

## 🙏 Acknowledgments

- [React Calendar](https://github.com/wojtekmaj/react-calendar) for the calendar component
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast build tool
- Google Calendar for design inspiration

## 📞 Support

If you have any questions or need support, please open an issue on GitHub or contact the author.

---

⭐ **Star this repository if you found it helpful!**
