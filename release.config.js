module.exports = {
    branches: ['main'], // Cambia esto si tu rama principal tiene otro nombre
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      {
        path: '@semantic-release/git',
        assets: ['CHANGELOG.md', 'package.json'], // Archivos a actualizar y enviar
      },
    ],
  };
  
