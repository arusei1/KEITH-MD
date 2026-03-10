/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');
const path = require('path');
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VUwZKiSBD9l7pqjICIYERHLCCogIoiqGzMoRpKKEXAqkLECf99Art7eg67s72cisqMly/zvawfIC8wRTZqwOgHKAm+QobaI2tKBEZAqw4HREAXxJBBMAKyWZt+6DrnKEKawyfTqIr7O7dXKQHR5WjVKy8IpzJfn+QX8OiCsnrNcPQHwAA1fXyzJ0pnYrlLY2sFyCPj+4DyrndiPMqOvtT4WX3T6hfwaBEhJjhPjDJFZ0RgZqPGhZh8jf7K9Y7esuHN8rDG99zuGYqxUrfD46s21fPMELOg7nRUry/4X6O/JikJUHgXxquxYWr+apnxhRuJqZ0v5TRZSB1V3hv3qO+906c4yVE8i1HOMGu+PPdKl7ZBLes3R85zxilFsCsCo+H1a1Zs7o1iX2zfDPHKzMSvEZ+b8rFem+F1tfWzCxaG2cLeSdPScgvphOFgIzaBdy2hv0l+J+6SD6+c/tfctVSsw6Ei8MdxtMkhjcSODvl1FpPlQbIv6N4x7fFQmfn0a/RnMHKczvgY0/v9Gq5DFOKwPKzrsREUJodnFuQ5F5fp/b76pA9ZRf7E0oTSphE2l1dSZ/LFfzX57TxY0OvqIojVWTt5Dl9uAtfxA6vB/OYqsoyi3J31ZmcXD8jYT4L5qdPJC13crHuhJvOzDNcvz45OqJnFYMQ/uoCgBFNGIMNF3t6JXQDjq4cigthzuOBYcWbviG99V+q5Hp03fLjouUVAqz2MrZJYIYP3vbTvEeMFdEFJighRiuIppqwgzRxRChNEwejv712Qoxt7k60t1ue74IAJZX5elVkB4w9NP4IwiooqZ16TR3p7QASMuM9rxBjOE9pOscohiVJ8RXoKGQWjA8wo+tUfIigGI0Yq9Gtn9SJux67KQ1G2BgrogvNTDhyDERAGIs8PBn1OkZRRn/+LfqtbWFiW33LEQBdkzzReFhWuzw37giKJgtBmtoEuyGELBvQMNu283/m28DFiEGe0Dc7Q4jjnxsZieb/K3GSiGomqJyr47O/DJm9C6OL1Ip1vE7y9DBTdPLH1gPL8cT9Npjtz7iod1Z7vdwfirvcv/wACRmB5o+FtMazxWZ8e4e41lj1Z6qjFLICJLPLOBN4Vj7t1rHxca/P5+CbnziTf9BZ8EQjqTrMlezHhJohcfC9TlktLM9Jj8tJWi9EVR+j3YrdoOHeIJ2DhNMlP9cK0elpcNyuFiyzD9MJ4gb19JFPHT3zOOa9pcBykV0s0JpYuEIlZWmcVVTaxIU4TXzpF2UBJVm8Gfi5Q9v5w4ae5WuXa3wNGz3fgXYL/VPKNeGs47tH9DeP9ZfmX7dRWlSNVJV0X2aU6rNLQ8dHrIt4Lmqjxt824d0j048TsS3duCx6P711QZpAdCnIGI4DLtMgR6AJSVK2BZ/mh+EMtXfVnapLM2sYzSJn6uRQbfEaUwXMJRvxw2Of7gjDov2W5pCinkKatTW0xnYqtwxu1LD0G2ceOAbX9DCcEj5+plSwafQcAAA==';
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
