# GPU Price Comparison Application

## Overview
This project is a React application that allows users to compare GPU prices from various vendors. Users can search for specific GPUs, sort them by different criteria, and view detailed information about each GPU. Additionally, users can "rent" GPUs, which will display their prices in a stock ticker format.

## Features
- **Search Functionality**: Users can search for GPUs by name or vendor.
- **Sorting Options**: Users can sort the GPU list by price (low to high, high to low), name, or vendor.
- **GPU Cards**: Each GPU is displayed in a card format showing its name, price, vendor, memory, and availability status.
- **Rent Button**: Users can click the "Rent" button to view GPU prices in a stock ticker format.
- **Responsive Design**: The application is designed to be responsive and user-friendly across different devices.

## Project Structure
```
GPTicker
├── src
│   ├── App.tsx               # Main application component
│   ├── index.tsx             # Entry point of the application
│   ├── components
│   │   ├── GPUCard.tsx       # Component for displaying individual GPU information
│   │   ├── SearchBar.tsx     # Component for searching and sorting GPUs
│   │   └── StockTicker.tsx    # Component for displaying GPU prices in a stock ticker format
│   ├── data
│   │   └── GPUData.ts        # Sample GPU data and type definitions
│   ├── pages
│   │   └── StockTickerPage.tsx # Page for displaying GPU prices in stock ticker format
│   └── types
│       └── index.ts          # TypeScript types and interfaces
├── package.json               # Project dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd GPTicker
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.