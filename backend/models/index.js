import { Sequelize } from 'sequelize'

// Convert REJECT_UNAUTHORIZED_FLAG to boolean
const rejectUnauthorized = process.env.REJECT_UNAUTHORIZED_FLAG === 'true'

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: rejectUnauthorized
        ? {
            require: true,
            rejectUnauthorized: true,
          }
        : false,
    },
  },
)

export default sequelize
