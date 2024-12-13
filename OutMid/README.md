# OutMid Browser

OutMid is a modular browser with decentralized storage and low-code tools.

## Features

- **Engine**: Custom rendering engine using Electron.
- **Creator**: Low-code page creation interface.
- **Storage**: Decentralized storage using IPFS.
- **Common**: Shared utilities.

## Setup

1. Clone the repository:
   git clone <repo-url>
   cd OutMid

2. Install dependencies:
   npm install

3. Start the application:
   npx electron src/main.js

## File Structure

OutMid/
├── src/
│   ├── engine/
│   ├── creator/
│   ├── storage/
│   ├── common/
│   └── main.js
├── tests/
├── docs/
├── README.md
├── .gitignore
└── package.json

## Contributing

1. Fork the repository.
2. Create a branch: git checkout -b feature-name
3. Commit changes: git commit -m "Description"
4. Push and create a pull request.

## License

MIT License
