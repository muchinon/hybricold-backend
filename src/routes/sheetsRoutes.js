import express from "express";
import {
  getAboutSectionData,
  getAllSheetData,
  getBannerData,
  getContactData,
  getFooterData,
  getServicesData,
  getSpecificSheetData,
  getTeamData,
  getTestimonialsData,
} from "../controllers/sheetsController.js";

const router = express.Router();

router.get("/", getAllSheetData);

router.get("/:range", getSpecificSheetData);

router.get("/banner", getBannerData);

router.get("/about", getAboutSectionData);

router.get("/contact", getContactData);

router.get("/services", getServicesData);

router.get("/testimonials", getTestimonialsData);

router.get("/team", getTeamData);

router.get("/footer", getFooterData);

export default router;
