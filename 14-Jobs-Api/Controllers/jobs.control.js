
//route="/"
export const getAllJobs = async (req, res, next) => {
  res.statusCode(200).json({ msg: "get all jobs" });
};
export const createJobs = async (req, res, next) => {
  res.statusCode(200).json({ msg: "create a job" });
};


//route="/:id"
export const getSingleJob = async (req, res, next) => {
  res.statusCode(200).json({ msg: "get a single job" });
};
export const deleteJob = async (req, res, next) => {
  res.statusCode(200).json({ msg: "delete a job" });
};
export const updateJob = async (req, res, next) => {
  res.statusCode(200).json({ msg: "update a job" });
};
