const Job = require("../models/Job.model");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const asyncWrapper = require("../middleware/async");

const getAllJobs = asyncWrapper(async (req, res) => {

  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({

     msg:"Here Are the List",
     status: StatusCodes.OK,
     JobList:jobs,
     count: jobs.length

     });
});

const getJob = asyncWrapper(async (req, res) => {

  const { id: jobId } = req.params;
  const { userId } = req.user;

  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId,
  });
  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }

  res.status(StatusCodes.OK).json({
    msg: `Job with id : ${jobId} found successfully`,
    status: StatusCodes.OK,
    jobDetails: job,
  });
});

const createJob = asyncWrapper(async (req, res) => {

  // req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({
    msg: "Job has been created successfully",
    status: StatusCodes.CREATED,
    JobDetails: job,
  });
});

const updateJob = asyncWrapper(async (req, res) => {

  const { company , position } = req.body; 
  const { userId } = req.user; 
  const { id: jobId } = req.params


  if (company === "" || position === "") {
    throw new BadRequestError("Company or Position fields cannot be empty");
  }
  const job = await Job.findByIdAndUpdate(

    { _id: jobId, createdBy: userId },
      req.body,
    { new: true, runValidators: true }
  );
  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }

  res.status(StatusCodes.OK).json({
    msg: `Job with id : ${jobId} has been Updated successfully`,
    status: StatusCodes.OK,
    JobDetails: job,
  });

});

const deleteJob = asyncWrapper(async (req, res) => {

  
  const { userId } = req.user; 
  const { id: jobId } = req.params
  const job = await Job.findByIdAndRemove({
    _id: jobId,
    createdBy: userId,
  });
  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }

  res.status(StatusCodes.OK).json({

     msg: `Job with id : ${jobId} has been Deleted successfully`,
    status: StatusCodes.OK,

  });
 
});

module.exports = {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
};
