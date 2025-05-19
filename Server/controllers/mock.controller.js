import mongoose from "mongoose"; // ✅ FIX 1: Import mongoose
import MockResponse from "../models/mock.js";

// POST endpoint to create a mock
export const createMock = async (req, res) => {
  try {
    const data = req.body;

    // Validate request body
    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({ error: "Request body cannot be empty" });
    }

    // Generate URLs
    const host = `${req.protocol}://${req.get("host")}`;
    const endpointUrl = `${host}/api/mocks/response`;
    const deleteUrl = `${host}/api/mocks/delete`;

    // Sanity check
    if (!endpointUrl) {
      return res
        .status(400)
        .json({ message: "Error while creating endpoint URL. Try again!" });
    }

    // Store data and URLs in the database
    const newMock = new MockResponse({
      httpBody: data,
      endpointUrl,
    })

    await newMock.save();

    // Respond with the created mock details
    return res.status(201).json({
      message: "Mock created successfully",
      endpoint: `${endpointUrl}/${newMock._id}`,
      id: newMock._id,
      deleteUrl: `${deleteUrl}/${newMock._id}`,
    });
  } catch (error) {
    console.error("Error creating mock:", error.message);
    return res.status(500).json({ error: `Failed to create mock: ${error.message}` });
  }
};


// Get all mock responses
export const getAllMocks = async (req, res) => {
  try {
    const mocks = await MockResponse.find();
    if (!mocks) {
      throw new Error("No mocks created yet!");
    }
    res.status(200).json(mocks);
  } catch (error) {
    console.error("Error fetching mock responses:", error);
    res.status(500).json({
      error: "Failed to fetch mock responses",
      details: error.message,
    });
  }
};

// Get a mock response by ID
export const getMockById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid mock ID" });
    }

    const mock = await MockResponse.findById(req.params.id);
    if (!mock) {
      return res.status(404).json({ error: "Mock not found" });
    }
    res.status(200).json(mock.httpBody);
  } catch (error) {
    console.error(`Error fetching mock ${req.params.id}:`, error.message);
    res.status(500).json({ error: "Failed to fetch mock" });
  }
};

// Delete a mock response by ID
export const deleteMock = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid mock ID" });
    }

    const deletedMock = await MockResponse.findByIdAndDelete(id);

    if (!deletedMock) {
      // Not found or already deleted
      return res
        .status(404)
        .json({ error: "Mock response not found or already deleted" });
    }

    res.status(200).json({ message: "Mock response deleted successfully" });
  } catch (error) {
    console.error("Error deleting mock response:", error);
    res.status(500).json({
      error: "Failed to delete mock response",
      details: error.message,
    });
  }
};
