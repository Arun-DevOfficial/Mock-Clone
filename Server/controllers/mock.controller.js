import mongoose from "mongoose"; // ✅ FIX 1: Import mongoose
import MockResponse from "../models/mock.js";

// POST endpoint to create a mock
export const createMock = async (req, res) => {
  try {
    const data = req.body;

    // Store the received data as an object
    const savedMock = await new MockResponse({
      httpBody: data, 
    }).save();

    const EndpointUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/mocks/response/${savedMock._id}`;
    const deleteUrl = `${req.protocol}://${req.get("host")}/api/mocks/delete/${
      savedMock._id
    }`;
    res.status(201).json({
      message: "Mock created successfully",
      endpoint: EndpointUrl,
      id: savedMock._id,
      deleteUrl: deleteUrl,
    });
  } catch (error) {
    console.error("Error creating mock:", error.message);
    res.status(500).json({ error: "Failed to create mock" });
  }
};

// Get all mock responses
export const getAllMocks = async (req, res) => {
  try {
    const mocks = await MockResponse.find();
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
      return res.status(404).json({ error: "Mock response not found or already deleted" });
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
