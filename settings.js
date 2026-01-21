/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');
const path = require('path');
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VUW5OiOBj9L3nVmga8gVVdtaAoiKig4GVrHiIESIMJJhHFKf/7FH2Z6aqtne3lKSSp853vnPPlByAUc+SgGgx/gJLhCgrULEVdIjAExiVJEANtEEMBwRBQK1AsmSb75Wh7pDszyi6+5y+Wo1aozo3kbnk3w7enq0tHegaPNigvxwJHfwCs1FxWo0Fr4NSty1TPA7GYVqk3kKghp1dZjs5hoF+rlJv7Z/BoECFmmKRmmaETYrBwUL2CmH2Nvjqxc1hP7OCgviwNZOmHp9zZaZsi3wRqH4VGki9leF6Pi+vX6E/pdt4tKoac0/ieEG239lpeXveDaaEcLn7YWbkLdr70ys07fY5TgmI7RkRgUX9Zd27VvWTrW1RzB9tWmpm38dJMBroe5SwJNHdM7vdVtBt1Ou7XiPeNZTz35WIeanUodZO+PSUz33vyrHBargbu5EzObIODFpY+E1+xj6zk/0d3R6dJEXi3LPdnvSwhMNdYX07qpVFn2sCcE3LvypmjS2T/Nfqtg487cQuxszF2zr5axqeu5UUHOJ6TvVIpZbnaLiwx1/RPukNxYX9ieXA0ne1vvtnyiHyTYmMRhuo62ZetPIAbogx8m/YFk2x7CePdjEsEF1SOdtG2X/mVPdo8za9uqASVVR3v+akakbOVes+vHeWotmMwlB9twFCKuWBQYEqaPUWW2gDG1RpFDIlXeYFyvSfFdb/AnWOttW7ZOpkcI++yKENaZ5OudJvF5iqVs/nWfQZtUDIaIc5RbGEuKKtdxDlMEQfDv7+3AUE38WZcU64jt0GCGRcBuZQFhfGHqx+HMIrohYh1TaJRs0AMDKXf20gITFLe6HghkEUZrtAog4KDYQILjn51iBiKwVCwC/o1tSMaN8Lbi2AfHtw1aIPTqyE4bnrudWW51+tIWl8bKtpf/Nu1gYVl+Y0gAdqgeL0mq11N6kiDjqL1u4rS3GwO2oDABgxMIInqRvJ3wg1+jATEBQdDMFodox41XdN1zJvLp1PdTvVRqoPfDX4k5c2JiRydr6kiL/yDtTpONPsAq5rSUqSlvt0Y/Nxy3G7Pv9+bCf8nCBiCes1mfFWwGR1sp93i5qzo7iVMj1FvYpic0Mk4JFLIn9hWzrQg3+SRcdhM1rGAp72zvw3ozPSMxM6wpCzYORn3dnNlpD831WJU4Qh9LqYc0nvRM+4Cha6YOas6HiBTNZn3knK4DT33uFdDUfW4vGDd66lznldRzJ7oy7xaqPWV0N5iYlueWW6eaIslZ6c1GOH0LcOvM1S8v134NV2Ndc1vgtHrU/DuwX9a+Ua8SZz0aH/CeH9c/mVADT/eOdxeiE2w9e/KLVlPt0w9O85x73iT/Hp0KvyyXAaRKing8fjeBmUBRULZCQwBLjNKEGgDRi9Ngm2S0D/UGumBraep3TReQC7031OxwSfEBTyVYCgP+pokd9RO9+3WitHSgjxrcup0M6vbRLzWy3ItoPgYMqA339jfgcdPf8EGVYAHAAA=';
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
