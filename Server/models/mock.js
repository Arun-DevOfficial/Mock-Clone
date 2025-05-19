import mongoose, { Schema } from "mongoose";

const mockResponseSchema = new Schema({
  identifier: {
    type: String,
    default: "response",
  },
  contentType: {
    type: String,
    default: "application/json",
  },
  charset: {
    type: String,
    default: "UTF-8",
  },
  // httpHeaders: {
  //   type: mongoose.Schema.Types.Mixed,
  //   default: {},
  // },
  httpBody: {
    type: Schema.Types.Mixed,
    default: {},
  },
  endpointUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MockResponse = mongoose.model("mocks", mockResponseSchema);

export default MockResponse;
