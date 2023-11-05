const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      default: "SKU",
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Please add a category"], // Corrected typo
      trim: true,
    },
    brand: {
      type: String,
      required: [true, "Please add a brand"],
      trim: true,
    },
    color: {
      type: String,
      required: [true, "Please add a color"],
      default: "As seen",
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, "Please add a quantity"],
      trim: true,
    },
    sold: {
      type: Number,
      default: 0,
      trim: true,
    },
    regularPrice: {
      type: Number,
      // required: [true, "Please add a price"]
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please add a description"], // Corrected typo
      trim: true,
    },
    image: {
      type: [String],
    },
    // ratings: {
    //   type: [
    //     {
    //       // rating: Number,
    //       star: Number,
    //       review: String,
    //       reviewDate: Date,
    //       // review: String,

    //       user: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "User",
    //       },
    //     },
    //   ],
    //   // type: [Object],
    // },

    // ratings: {
    //   type: [Object],
    // },

    ratings: [
      {
        star: Number,
        review: String,
        reviewDate: Date,
        name: String,
        userID: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

// const mongoose = require("mongoose");

// const productSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Please add a name"],
//       trim: true,
//     },
//     sku: {
//       type: String,
//       required: true,
//       default: "SKU",
//       trim: true,
//     },
//     category: {
//       type: String,
//       required: [true, "Please add a categoty"],
//       trim: true,
//     },
//     brand: {
//       type: String,
//       required: [true, "Please add a brand"],
//       trim: true,
//     },
//     color: {
//       type: String,
//       required: [true, "Pleae add a color"],
//       default: "As seen",
//       trim: true,
//     },
//     quantity: {
//       type: Number,
//       required: [true, "Please add a quantity"],
//       trim: true,
//     },
//     sold: {
//       type: Number,
//       default: 0,
//       trim: true,
//     },
//     regularPrice: {
//       type: Number,
//       //required: [true, "Please add a price"]
//       trim: true,
//     },
//     price: {
//       type: Number,
//       required: [true, "Please add a price"],
//       trim: true,
//     },
//     description: {
//       type: String,
//       reqired: [true, "Please andd a description"],
//       trim: true,
//     },
//     image: {
//       type: [String],
//     },
//     ratings: {
//       type: [object],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Product = mongoose.model("Product", productSchema);
// module.exports = Product;
