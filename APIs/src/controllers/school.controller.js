import { db } from "../config/db.js";
import { getDistance } from "../services/getDistance.service.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";

export const addSchool = async (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
        return apiResponse(400, false, "Invalid request");
    }

    try {
        const [result] = await db.execute(
            "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
            [name, address, latitude, longitude]
        );
        return apiResponse(res, 201, true, "School added successfully", { id: result.insertId });
    } catch (e) {
        throw new apiError(500, "Database Error", e.message);
    }
};

export const getSchools = async (req, res) => {
    // console.log("API called with:", req.query);
    const { latitude, longitude } = req.query;
    // console.log("Coordinates:", latitude, longitude);

    if (isNaN(latitude) || isNaN(longitude)) {
        throw new apiError(400, "Invalid latitude or longitude");
    }
    try {
        const [schools] = await db.execute("SELECT * FROM schools");
        console.log("Fetched schools:", schools.length);

        const userLat = parseFloat(latitude);
        const userLon = parseFloat(longitude);

        const sortedSchools = schools.map(school => ({
            ...school,
            distance: getDistance(
                userLat,
                userLon,
                parseFloat(school.latitude),
                parseFloat(school.longitude)
            )
        })).sort((a, b) => a.distance - b.distance);

        console.log("Sorting done");
        return apiResponse(res, 200, sortedSchools, "Schools retrieved");
    } catch (e) {
        console.error("Error in DB fetch:", e);
        throw new apiError(500, "Internal Error", e.message);
    }
};

