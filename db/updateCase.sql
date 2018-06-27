update cases SET (
    title,
    subtitle,
    brand,
    blurb,
    award_blurb,
    deliverables,
    link_url,
    background_url
) =
($2, $3, $4, $5, $6, $7, $8, $9)
where case_id = $1

returns cases