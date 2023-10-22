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
    const id = req.params.id

    try {
     const updatedTour = await Tour.findByIdAndUpdate(id, {
        $set: req.body
     }, {new:true})

     res.status(200).json({
       success: true,
       message: "Successfully updated",
       data: updatedTour,
     });
    } catch (err) {
        res.status(500).json({
          success: false,
          message: "failed to update",
        });
        
    }
}
//delete tour
export const deleteTour = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
}
//getSingle tour
export const getSingleTour = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
}
//getAll tour
export const getAllTour = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
}