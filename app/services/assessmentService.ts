// Error handling in service
    import { Pool } from 'pg';

    const pool = new Pool({
      connectionString: process.env.POSTGRES_URL!,
    });

    export async function getAllAssessments() {
      try {
        const result = await pool.query('SELECT * FROM assessments');
        return result.rows;
      } catch (error) {
        console.error("Error fetching assessments:", error);
        throw new Error("Failed to fetch assessments.");
      }
    }
