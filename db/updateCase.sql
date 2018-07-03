update cases SET (
    title,
    subtitle,
    brand
) =
($2, $3, $4)
where case_id = $1

returns cases