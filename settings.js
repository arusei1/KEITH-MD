/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');
const path = require('path');
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU25KiSBD9l3rVmAYEL0R0xKJyEwHFuxvzUECJxZ2qQsUJ/30Cu3t6HnZne3kqqjJOnsxzMn+AvMAUWagB8g9QEnyBDLVH1pQIyGBcn06IgC4IIYNABhttl+v1LVWouk2u+77r1JYw0O6jl+UxVSVDbI7o4GyRqh5ewaMLytpPcfAHwNs9PqkwVNzaFdlRD0TvwLIoLc0L10uuU9WRso0ezyN9rL6CR4sIMcF5pJZnlCECUws1C4jJ1+j3bWN5IbqkzYKjnhmWHRNDhSsn6m0NvaLr29xBg3A9wvvr1+hX8eawda7Uacj0WGyxYhf6aRz0O+kCm4p3VcViWK0zQYs3b/QpjnIUmiHKGWbNl/vOaQrUOntNzPyJszcPaDEz1JBIy+tewht9K3WUc3nb7RLN/hrxTuflXhywYCih5lX+MFHUUzpObvOV5hDi4f7Vm/PWi5Sd1d+JL8iHV5L/0/eD7sdrL1rMN6RG4fxIAk/cV3o1iMsm7mjTMAvgshcXnv5F24zyzL2YJxqepd3MKArHXpHdy3Q5nkRwHfr8JUnqwhWWenz9pA9ZTf7Ekndd44z9vmCEbmEvCr/Xi2I8sqZ7yRL8faeKvVs6u81Jh+7Shl45w9BuxfAq+Yo+NcUYmoZnNgoZaMb9sJxl/sVRFOX1WVGCGjMEMv/oAoIiTBmBDBf5847rdwEMLysUEMSe7QVz3eIM3hc1hzcNgV6WIvREYZU6gug2lkvT7LYJ66Q35+1X0AUlKQJEKQoNTFlBGhtRCiNEgfz39y7I0Y29Cdem6/FdcMKEsk1el2kBww9VPx5hEBR1zlZNHkzaAyJA5j6vEWM4j2jbxzqHJDjjC5qcIaNAPsGUol8VIoJCIDNSo19TOynCtvH2uL/r7/tH0AXZUxAcAhkIksjzktTjRv2RLAz/ot+uLSwsy285YqAL0mcYPxRHXI8b9IRRXxSENrJ96IIctmBAg3nQtC1/J9zih4hBnFIgg8nCD6RCtdUFCiqb6rqiRsokUsBngR9OeVNC44PqGgm84x2Nha+NzCO8NEVRsqhUdusxrTqWLUre/b4+vP4DCJCBX/XOSsMtJivbSVjgZ6LUG9ZxOBw1pKZ2tXaKevvC+cJxRebnbb6JI6PTDKd9YR9M5sS6lWMrmtHJdBtlp61QWlBaT5evbbYQXXCAfk8mxP4mnAvuWMxTKZhQN9d5y+osjcF44EBxtuM3pwmXzLOX4lixwSAZaO5ghKbGepuvqSUSMZnQuxuPLFZ13OOxlxv2NHrz8HOG0vfdhZ/uaqVrf08YPVfBuwb/KeUb8dZx3KP7G8b7cvmXAR174d6ipsPWm513F26nlb4jw8qy/IO11JKrb11w7LqbYMgJ4PH43gVlCtmpIBmQAS7PRY5AF5Cibh1s5qfiD7kmysZUoshsC08hZcrnVKxxhiiDWQlkftAfStJQ4EZvUQtSlAak59anlng2xNbijVKWKwbZx5ABpf2m3hY8fgLpTzSAgAcAAA==';
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
