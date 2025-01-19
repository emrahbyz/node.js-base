const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    permission: { type: String, required: true },
    created_by: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
  },
  {
    versionKey: false,
    timestams: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class RolePrivileges extends mongoose.Model {}

schema.loadClass(RolePrivileges);
module.exports = mongoose.model("role_privi_leges", schema);
