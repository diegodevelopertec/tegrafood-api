import{Sequelize} from "sequelize";

export const bd = new Sequelize({
    dialect: "sqlite",
    storage: "./src/database/tegrafood.db",
    
  });
  