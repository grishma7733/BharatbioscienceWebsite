const fs = require('fs');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

async function build() {
  try {
    // Read the CSS file from public folder
    const css = fs.readFileSync('public/styles.css', 'utf8');
    
    // Process with PostCSS
    const result = await postcss([
      tailwindcss,
      autoprefixer
    ]).process(css, { from: 'public/styles.css', to: 'public/output.css' });
    
    // Write the minified output
    fs.writeFileSync('public/output.css', result.css);
    
    console.log('✅ CSS build completed successfully!');
  } catch (error) {
    console.error('❌ CSS build failed:', error);
    process.exit(1);
  }
}

build();