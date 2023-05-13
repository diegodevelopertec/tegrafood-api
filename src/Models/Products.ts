import { bd } from "../Instances";
import { DataTypes, Model, Optional } from "sequelize";

interface ProductsAttributes extends Model {
    id: number,
    name: string,
    price: number,
    description:string,
    category:string,
    image?:string,
   
  }


  export const Products=bd.define<ProductsAttributes>('Products',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category:{
        type:DataTypes.STRING
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
       
      }
  },{
    tableName:'products',
    timestamps:false
  })