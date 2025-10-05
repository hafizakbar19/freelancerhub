import Job from '../models/Job.js';

export const createJob = async (req, res) => {
  try {
    const job = await Job.create({ ...req.body, client: req.user.id });
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create job' });
  }
};

export const getJobs = async (req, res) => {
  try {
    const { paid } = req.query;
    const filter = paid !== undefined ? { paid: paid === 'true' } : {};
    const jobs = await Job.find(filter).populate('client', 'name');
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch jobs' });
  }
};