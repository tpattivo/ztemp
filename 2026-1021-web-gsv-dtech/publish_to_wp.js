const fs = require('fs');
const https = require('https');

const pageId = 2; // Homepage ID
const username = 'thai';
const appPassword = 'J37dChFVCULjrPPluVN2NAQ2';
const authHeader = 'Basic ' + Buffer.from(`${username}:${appPassword}`).toString('base64');

let blockContent = fs.readFileSync('scratch_converted_blocks.txt', 'utf8');
const jsContent = fs.readFileSync('scratch_clean.js', 'utf8');
const cssContent = fs.readFileSync('scratch_clean.css', 'utf8');

// Append the script in wp:html block at the end (Step 3 of greenlight-vibe)
const scriptBlock = `\n<!-- wp:html -->\n<script data-wp-block-html="js">\n${jsContent}\n</script>\n<!-- /wp:html -->\n`;
const fullContent = blockContent + scriptBlock;

console.log(`Uploading Homepage to Page ${pageId}...`);
console.log(`Content size: ${fullContent.length} bytes`);
console.log(`CSS size: ${cssContent.length} bytes`);

function postJson(hostname, path, data, callback) {
  const payload = JSON.stringify(data);
  const req = https.request({
    hostname,
    port: 443,
    path,
    method: 'POST',
    headers: {
      'Authorization': authHeader,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  }, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      callback(res.statusCode, body);
    });
  });
  req.on('error', (err) => {
    console.error('Request error:', err);
  });
  req.write(payload);
  req.end();
}

// 1. Update page content & meta via core REST API
postJson('gsvdtech.thaipham.top', `/wp-json/wp/v2/pages/${pageId}`, {
  title: 'Quản lý phòng khám da liễu gọn trong một nền tảng - GSV DTech',
  content: fullContent,
  meta: {
    _gspb_post_css: cssContent
  }
}, (status, body) => {
  console.log(`Core REST API Response: ${status}`);
  if (status !== 200) {
    console.error('Core REST Error:', body.slice(0, 500));
  } else {
    console.log('Successfully updated page content and _gspb_post_css meta!');
  }

  // 2. Also call greenshift-native endpoint css_settings (Step 6 preferred)
  postJson('gsvdtech.thaipham.top', '/wp-json/greenshift/v1/css_settings', {
    id: pageId,
    css: cssContent
  }, (gsStatus, gsBody) => {
    console.log(`GreenShift CSS endpoint Response: ${gsStatus}`);
    console.log('GreenShift response:', gsBody);
  });
});
