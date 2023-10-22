import Tour from "../models/Tour.js";

//create a new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully created",
        data: savedTour,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

//update tour
export const updateTour = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
}
//delete tour
export const updateTour = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
}
//getSingle tour
export const updateTour = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
}
//getAll tour
export const updateTour = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
}