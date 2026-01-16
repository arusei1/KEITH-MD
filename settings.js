/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');
const path = require('path');
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU25KiSBD9lY161Ri5i0Z0xCKglBdAFLxszEMJJZQiYFGI9IT/voHdPT0Pu7O9PBVVGSdP5jmZP0CWkxLPcAOGP0BByQ0x3B5ZU2AwBKPqeMQUdEGEGAJDsBiRzkmYhukgVCt4Y6zX2yS21L/FR0XhlMI6W4ro7Kr7JH8Bjy4oqkNKwt8ABpp73U1WYc878Etxdw+dabAwCJXnN369qe+uvjllis2mzeIFPFpERCjJYrNI8AVTlM5w4yJCv0afc6rObSkPRjtTLX1RdXh7so28U6yPO+pk3jniUbMXxrP9Vvsa/dTeRmmV2QWcZ6deQaxUOmVJ5Vs3z9/B3E0F/ToR5htjfH6jX5I4wxGMcMYIa77cd38yXr3eUN+o9fPYX4zmh/vrdhVXnrzAOQ9zYV7g3LTT5BJ+jbil1mfdFLjUQ1Mf6pL5ugxYuDUjVdms4LmQtgL04M6U+fBX4i798Mr5//R9oaVBJ7Glm7dXmsL0+eYiS5AOCjdT17qMSD8x1rlxM33pa/QndbkeeULUM21TwzbpbVdjfy6ulKsvQm5cozOUogjKTR1/0kesor9jOeNHPtx7h0MYEa6uD/dmRlin4YgxF/njSI/9StUFbxpc7dfdYSzEWAtcdUFrl1STeS+Anam/IcvGV3uSF3WmR/4gxsuXZ0Vn3MAIDPlHF1Ack5JRxEietXeq2AUouq1wSDF7dheUgtLI174Sj6wkqKe08ipniqesrO7SNrzz42Lknm6iPuhoL6ALCpqHuCxxZJGS5bRZ4LJEMS7B8K/vXZDhO3vTrc0m8l1wJLRkflYVaY6iD1E/HlEY5lXGVk0W6u0BUzDkPq8xYySLy7aNVYZomJAb1hPESjA8orTEPwvEFEdgyGiFfw6tnkdt32Uoa/uZNwNdcHnqQSIwBIIs8bwsi9xAGQyF/p/lt7qFRUXxLcMMdEH6DONVacCJXF8UBookCG1k+9AFGWrBgJ6i5g8zY23T3zm3KSLMEEnLNgBmi9fBwjRnJ7soy8lEW8aaHmvgs8YPr7yJsTF72410PYbKTHKuS9iMHY5TcxKPsIPzqlz2OWdu4GNxzl/+AaQ11jlKkvRSXjbc/Mzq8FzE6vJg2U1fJns5GwxGnbMlwW3AqOVUkwlMk5Tr3W/L8TZ2tL1Pd7pAVsl9ObeM3opCxBmGEb+02SJ8IyH+NVnkGd7WvqymmR4k2anEs5TbBMUGqjXt6Is6DmgvcWX3buDkxFtVJ6aCsx7QwAyRX9jLy74vzk9XQ7erk9QbyNAq0Kl+c/FzitL37UWeBmvVa3+PBD+XwbsM/6nmG/HWdNyj+wvG+3r5lxEdBYnL89UsEx1SGdezvkjWzHZnMNe2p+w6p6YzMEgtZsp+Bh6P711QpIgdc3oBQ4CyiOZPr9C8al0Ms2P+m2S65kMtjmFbeYpKpn1OxppccMnQpQBDvq+ossgrovgW5dK8sFCZtF6dSYkltTZvtKJYMcQ+Bg1o7ec4Anj8DdWwXYmDBwAA';
const dev = process.env.OWNER_NUMBER || '254115530969';
const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 
const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,  
  dev,
  session,
};

//must run
