delete from cases where case_id = $1

returning cases;