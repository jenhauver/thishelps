$(function () {
 var theTemplateScript = $("#name-template").html();
 var theTemplate = Handlebars.compile(theTemplateScript);
 var context={
 "firstname": "John",
 "lastname": "Doe"
 };
 var theCompiledHtml = theTemplate(context);
 $('.name-placeholder').html(theCompiledHtml);
 });
/*
{
 "conditions": [
  {
   "id": 1,
    "name": "Acne",
    "definition": "Acne is a skin condition that causes pimples to develop. Sebaceous glands secrete a waxy, oily substance to lubricate and waterproof the skin and hair of mammals. In the case of acne, these sebaceous glands enlarge, and production of this substance increases. A bacteria called Propionibacterium acne lives normally on the skin. The increaed amount of sebum on the skin provides an environment that is conducive to an overgrowth of these bacteria. The overgrowth of bacteria causes inflammation. The combination of this inflammation and hair follicles blocked with excess sebum and skin cells can lead to the rupture of  follicles and the development of pimples."
    "supplements": "["Zinc", "Niacinamide Gel (topical antiseptic)", "Tea Tree Oil", "Chromium", "Gugulipid", "Red Clover", "Selenium", "Vitamin E", "Burdock", "Low-Glycemic Index Diet"]" 
  },
  {
  "id": 2,
    "name": "ADD/ADHD",
    "definition": "Attention deficit hyperactivity disorder (ADHD) is a behavioral condition with persistent and pervasive core symptoms of inattention, hyperactivity, and impulsivity. What causes it is not known difinitively, but studies show there is a genetic component which manifests an imbalance of catecholamine metabolism in the cerebral cortex area of the brain . There are a number of secondary environmental factors that are being investigated currently. These include: dietary influences, nutritional deficiencies, and toxic prenatal exposures."
    "supplements": ["2-Dimethylaminoethanol (DMAE)", "Zinc", "Black Tea", "Blue-Green Algae", "Calcium", "Combined Amino Acids (GABA)," "Combined Polysaccharides (galactose, glucose, mannose, N-acetylneuraminic acid, fucose, N-acetylgalactosamine, N-acetylglucosamine, and xylose)", "Omega-3 Fatty Acids (Fish Oil)", "Evening Primrose Oil", "Carnitine", "Ginseng and Ginko biloba", "Vitamin B3 (Niacin)", "Vitamin B6", "Multivitamin + Multimineral Supplement", "Fucose", "Glucose", "Glycine", "Inositol", "Calcium", "Iron", "L-Glutamine", "L-Phenylalanine", "L-Tyrosine", "Magnesium", "Mannose", "N-Acetylglucosamine", "N-Acetylneuraminic Acid", "St. John's Wort", "Taurine", "Trace Minerals", "Xylose", "Avoidance of Food Additives and Food Coloring"]
  },
  {
  "id": 3,
    "name": "Allergic Rhinosinusitis",
    "definition": "Allergic Rhinosinusitis is inflammation of the nasal and sinus cavities, which causes the sudden occurrence of runny nose, sneezing, nasal obstruction and often itching of the eyes, nose, and palate. Further symptoms are postnasal drip, cough, irritability, and fatigue. The most common cause of allergic rhinosinusitis is ñSeasonal Allergies,î also referred to as ñHayfever.î Some individualsÍ immune systems develop an antibody when exposed to certain triggers. A subset of these individuals develop sufficient enough binding of antibodies to cause the release of chemical and protein mediators which directly and indirectly lead to the symptoms of allergic rhinosinusitis. \n\nThese triggers include and are not limited to:\n\nPollen from trees, plants, grasses or weeds\nMold spores, which grow when weather is humid or damp\nInsects such as dust mites and cockroaches\nAnimals such as cats and dogs"
    "supplements": ["Butterbur", "Antioxidants", "Conjugated Linoleic Acid (CLA)", "Enzyme Potentiated Desensitization (EPD)", "Hops", "Nettle Leaf", "Flavonoids including Citrus Bioflavonoids", "Probiotics", "Quercetin", "Rosmarinic Acid/Perilla Frutescens", "Soy Sauce Extract (Shoyu Polysaccharides)", "Spirulina", "Tinospora Cordifolia", "Capsaicin (Topical)", "Vitamin C"]
 },
  {
  "id": 4,
    "name": "Alopecia Areata",
    "definition": "Alopecia areata is a genetic, chronic, immune-mediated skin condition that causes a sudden loss of patches of hair on the scalp and sometimes other parts of the body. T-cells attack and cause inflammation of hair follicles during the period of active hair growth. Because they only attack during this phase, there is no permanent damage to the hair follicle, which means there is no scarring. In most people, new hair eventually grows back in the affected areas, although this process can take months.\n\nFactors that have been implicated in triggering episodes are infections, drugs, and severe emotional stress."
    "supplements": ["Choline-Stabilized Orthosilicic Acid","Essential Oils_(Combination of Thyme", "Lavender", "Rosemary and Cedarwood (in base of grape seed and jojoba oils)", "Ammi Visnaga (Khellin) with UVA Light", "Melatonin (Topical)", "Nickel Sulfate", "Primula obconica", "Vitamin D"]
},
  {
  "id": 5,
    "name": "Androgenic Alopecia (Male Pattern Baldness)",
    "definition": "Balding is an androgen-dependent trait that requires a genetic predisposition. An androgen is a male hormone. During puberty, males experience a dramatic increase in androgen production. Dihydrotestosterone (DHT) is the key androgen involved in the induction and promotion of male androgenetic alopecia. DHT binds on a cellular level at the dermal papilla of the hair follicle, activating the genes responsible for the gradual transformation of large, terminal hair follicles into smaller follicles with a shortened growth phase. This shortening of this growth phase of the hair causes balding in the characteristic distributions."
    "supplements": ["Cedar", "Lavender", "Onion", "Para-Aminobenzoic Acid (PABA)", "Rosemary", "Saw Palmetto", "Selenium", "Tea Tree Oil", "Thyme", "Thymus Extract"]
  },
  {
  "id": 6,
    "name": "ALS (Amyotrophic Lateral Sclerosis, Lou Gherig's Disease)",
    "definition": "ALS\n\nMotor neurons degenerate and die.\nGlial cells (cells that provide support and protection for neurons) replace neurons.\nMotor cells in the cerebral cortex disappear.\nThe spinal cord atrophies; ventral roots become thin; and large, myelinated fibers in motor nerves are lost. \n\nThere are several hypotheses regarding the cause of ALS: Altered RNA processing, SOD1-mediated toxicity, excitotoxicity, cytoskeletal derangements, mitochondrial dysfunction, viral infections, apoptosis, growth factor abnormalities, inflammatory responses, and others."
    "supplements": ["Antioxidants", "Coenzyme Q10 (CoQ10)", "Genistein", "Guanidine", "Vitamin B12"]
  },
  {
  "id": 7,
    "name": "Alzheimer's Disease",
    "definition": "AlzheimerÍs disease is the most common cause of dementia and one of the leading sources of morbidity in the aging population. Genetic abnormalities cause overproduction and/or decreased clearance of amyloid beta peptides, causing neuritic plaques. Hyperphosphorylated proteins accumulate to form neurofibrillary tangles in the brain. \n\nThere are several unproven theories regarding the scientific cause of AlzheimerÍs disease. If you are interested in learning about these, see the AlzheimerÍs Wikipedia page."
     "supplements": ["Ginkgo biloba", "Huperzine A", "Phosphatidylserine", "Vinpocetine", "Carnosine", "Citrulline", "Choline Alfoscerate", "Colostrum", "Omega-3 Fatty Acids (Fish Oil)", "2-Dimethylaminoethanol (DMAE)", "Lemon Balm", "N-Acetylcysteine (NAC)", "Sage", "Bee Pollen", "Inositol", "Magnesium", "Vitamin B1", "Zinc", "Pregnenolone"]
  },
  {
  "id": 8,
    "name": "Anxiety",
    "definition": "Generalized anxiety disorder (GAD) is characterized by excessive and persistent worrying that is hard to control, causes significant distress or impairment, and occurs on more days than not for at least six months. Other features include psychological symptoms of anxiety, such as apprehensiveness and irritability, and physical (or somatic) symptoms of anxiety, such as increased fatigue and muscular tension.\n\nSocial anxiety disorder (SAD), also known as social phobia, is a common disorder characterized by excessive fears of scrutiny, embarrassment, and humiliation in social or performance situations, leading to significant distress or impairment in functioning.\n\nPanic attacks and panic disorder are common problems in both primary and psychiatric specialty care. Panic attacks classically present with spontaneous, discrete episodes of intense fear that begin abruptly and last for several minutes to an hour. In panic disorder, patients experience recurrent panic attacks, at least some of which are not triggered or expected, and one month or more of either worry about future attacks/consequences, or a significant maladaptive change in behavior related to the attacks, such as avoidance of the precipitating circumstances."
     "supplements": ["5-Hydroxytryptophan (5-HTP)", "Arginine_Plus_Lysine", "Chamomile", "Chinese Skullcap", "Omega-3 Fatty Acids (Fish Oil)", "Flaxseed Oil", "GABA", "Galphimia Glauca", "Gamma Oryzanol", "Gotu Kola", "Hops", "Inositol_(for Panic Disorder)", "Kava", "Lemon Balm", "Linden", "Magnesium, "Hawthorn + Eschscholtzia californica (California Poppy) Combination", "Melatonin", "Multivitamin + Mineral Supplement", "Passionflower", "Sage", "Selenium", "European Skullcap", "Suma", "Valerian"]
  },
  {
  "id": 9,
    "name": "Arthritis, Gouty",
    "definition": "Gout is the presence of monosodium urate (MSU) crystals in joints, bones, and soft tissues.\n\nHyperuricemia (urate concentration exceeding the solubility of urate in extracellular fluid) occurs alongside the accumulation of MSU crystals. \n\nThis causes inflammation, and often tophi, an accumulation of immune cells that accumulate to try to ñwall offî the foreign substance the immune system is unable to eliminate."
     "supplements": ["Aspartic Acid", "Bromelain", "Celery Juice", "Cherry Juice", "Devil's Claw", "Omega-3 Fatty Acids (Fish Oil)", "Folate", "Olive Leaf", "Selenium", "Vitamin A", "Vitamin C", "Vitamin E"]
  },
  {
  "id": 10,
    "name": "Arthritis, Osteo-",
    "definition": "Osteoarthritis typically begins at joints that experience the most stress and physical loads. The collagen in articular cartilage and surrounding soft tissue begins to break apart, allowing other cells to attract water and expand. \n\nProduction of collagen is increased, leading to thickening of the bone under the cartilage (subchondral sclerosis). \n\nMost people will experience some degree of synovitis (inflammation of the fluid surrounding the joints)."
     "supplements": ["Avocado/Soybean Unsaponifiables", "Chondroitin Sulfate", "Glucosamine", "Boswellia", "Capsaicin", "Cat's Claw", "Cetylated Fatty Acids", "Collagen Hydrolysate", "Comfrey (topical)", "Devil's Claw", "Ginger and Galanga (Alpinia galanga)", "Green-lipped Mussel", "Krill Oil", "Methyl Sulfonyl Methane (MSM)", "Multimineral Supplement", "Niacinamide", "Oligomeric Proanthocyanidins (OPCs)", "Proteolytic Enzymes", "Rose Hips", "S-adenosylmethionine (SAMe)", "Velvet Antler", "White Willow", "Zinc"]
  },
  {
  "id": 11,
    "name": "Arthritis, Rheumatoid",
    "definition": "Rheumatoid Arthritis is caused by a combination of genetic factors and environmental stimuli.\n\nThe most likely mechanism for the environmental component is repeated activation of innate immunity, especially at mucosal surfaces. This process can take several years, with gradual increased autoimmunity that eventually flips the switch to a clinically apparent disease. \n\nOther potential contributors are certain periodontal bacteria and gut bacteria."
     "supplements": ["Omega-3 Fatty Acids (Fish Oil)", "Boswellia", "Bromelain", "Cat's Claw", "Curcumin (Turmeric)", "Devil's Claw", "Folate", "Gamma-Linolenic Acid (GLA)", "Glucosamine", "Krill Oil", "Methyl Sulfonyl Methane (MSM)", "Rose Hips", "Vitamin B6", "Vitamin E", "Yucca", "Food Allergen Avoidance", "Vegan Diet"]
  },
  {
  "id": 12,
    "name": "Asthma",
    "definition": "Asthma is a condition that likely results from complex interactions between multiple environmental and genetic influences. Numerous risk factors for asthma have been identified. The best studied risk factors, including gender, airway hyperreactivity, atopy (see below), allergens, infections, tobacco smoke, obesity, and perinatal factors.\n\nThe strongest identifiable risk factor for asthma is Atopy (atopic syndrome), a syndrome characterized by a tendency to be ñhyperallergicî. This is a genetic predisposition for the immune system to develop specific antibodies against common environmental allergens. A person with atopy typically presents with one or more of the following : eczema (atopic dermatitis), allergic rhinitis (hay fever), or allergic asthma.\n\nAsthma can be caused by multiple underlying mechanisms. Studies so far show that early exposure to bacterial allergens (during the first year of life) can be protective, and exposure thereafter is more likely to cause sensitization. \n\nStudies so far have shown that asthma is likely related to specific pollutants, as opposed to cumulative amount of pollution. \n\nViral and bacterial respiratory infections are well known triggers for causing asthma exacerbation in children and adults. \n\nAdult rhinitis puts adults at greater risk of developing adult-onset asthma. \n\nStudies show that there is a relationship between smoking and exposure to secondhand smoke, and airway hyperresponsiveness.\n\nSmoking mothers put their unborn child at risk for lower pulmonary function, which thereby increases the risk for asthma later in life. \n\nStudies show that obese patients are more likely to develop asthma. \n\nIt has been postulated that there is an association between use of Acetaminophen and Ibuprofen, as well as antibiotics, and development of asthma. \n\nThere are several other proposed impacting factors that will not be listed here because evidence is only currently speculative."
    "supplements": ["Boswellia", "Choline", "Coleus forskohlii", "Pycnogenol", "Belladonna", "Beta-Carotene", "Borage Seed Oil (GLA)", "Bromelain", "Butterbur", "Coenzyme Q10 (CoQ10)", "Cordyceps", "Creatine", "Danshen Root", "English Ivy", "Eucalyptus Oil", "Omega-3 Fatty Acids (Fish Oil)", "Ginkgo biloba", "Ginseng", "Goji", "Green Tea", "Green-Lipped Mussel", "Hyaluronic Acid", "Japanese Herbal Combinations (Saiboku-To and Mai-Men-Dong-Tang)", "L. acidophilus", "L-Carnitine", "Lutein", "Lycopene", "Mistletoe", "Omega-3 Fatty Acids (Fish Oil)", "Oligomeric Proanthocyanidins (OPCs)", "Alpha-Linolenic Acid", "Para-Aminobenzoic Acid (PABA)", "Peppermint", "Perilla", "Probiotics", "Sanicle", "Selenium", "Vitamin B6", "Vitamin C", "Vitamin E", "Food Allergen Avoidance"]
  },
  {
  "id": 13,
    "name": "Atherosclerosis",
    "definition": "Atherosclerosis is the process which causes disease of the coronary (heart), cerebral (brain), and peripheral arteries. Traditional risk factors for atherosclerosis, including hypercholesterolemia, diabetes, hypertension, cigarette smoking can cause endothelial dysfunction. Endothelial cells are what lines the inside of your blood vessels. \n\nHigh levels of LDL cholesterol [55,61] and low levels of high density lipoprotein (HDL) cholesterol are particularly important risk factors for atherosclerosis. Too much LDL cholesterol and not enough HDL cholesterol can cause inflammation, aggregation of blood cells (clots), and atherosclerotic plaques (lesions) in the blood vessels. \n\nHypertension, smoking, and diabetes also play a role in increased risk for atherosclerosis. \n\nChronic infections are another potential cause of atherosclerosis, directly injuring the blood vessels or inducing a state of systemic inflammation."
      "supplements": ["Black Tea", "Bilberry", "Chocolate", "Chromium", "Dehydroepiandrosterone (DHEA)", "Feverfew", "Garlic", "Ginger", "Ginkgo biloba", "Grape Seed", "Green Tea", "Hawthorn", "Hesperidin", "Horse Chestnut", "Aortic Acid", "Arginine", "Gotu Kola", "Inositol Nicotinate", "L-Carnitine", "Omega-3 Fatty Acids (Fish Oil)", "Omega-3 Fatty Acid (Alpha-linolenic Acid [ALA]) (Flaxseed Oil)", "Magnesium", "Mesoglycan", "Pycnogenol", "Red Yeast Rice", "Rutin", "Wholegrain Oats", "Quit Smoking", "Exercise & Weight Loss"]
  },
  {
  "id": 14,
    "name": "Athlete's Foot",
    "definition": "Dermatophyte infections are common worldwide, and dermatophytes are the prevailing causes of fungal infection of the skin, hair, and nails. AthleteÍs foot is a dermatophyte (fungal) infection of the foot, contracted from an infected person or animal."
      "supplements": ["Essential Oils (Bitter Orange, Peppermint, Eucalyptus)", "Garlic", "Tea Tree Oil", "Zinc", "Ozonated Sunflower Oil", "Solanum chrysotrichum (Sosa)", "Ageratina pichinchensis (Snakeroot)"]
  },
  {
  "id": 15,
    "name": "Autism",
    "definition": "It is generally understood that autism spectrum disorders have a genetic etiology, which alters brain development, affecting social and communication development and leading to restricted interests and repetitive behavior. Supporting this is the \"epigenetic theory,\" in which an abnormal gene is turned \"on\" early in fetal development and affects the expression of other genes that are not mutated themselves."
      "supplements": ["Carnosine", "Melatonin", "Multivitamin + Multimineral Supplement", "Vitamin B6 (alone or combined with_Magnesium)", "Vitamin C", "Food Allergen Avoidance"]
  },
  {
  "id": 16,
    "name": "Bipolar Disorder",
    "definition": "Family, twin, and adoption studies demonstrate that inherited factors are involved in the pathogenesis of bipolar disorder. However, the risk of developing bipolar disorder appears to involve environmental factors as well, as indicated by the finding in monozygotic twins that the concordance rate of bipolar disorder is not 100 percent.\n\nEpigenetic phenomena may involve environmental factors such as toxins (eg, metals and air pollutants) and early life experiences or chronic stress, which induce changes such as methylation of deoxyribonucleic acid and histone acetylation.\n\nSerum markers of inflammation are increased in bipolar disorder and suggest that the disorder is associated with immune system dysregulation."
      "supplements": ["Choline", "Omega-3 Fatty Acids (Fish Oil)", "Flaxseed Oil", "Folate", "Inositol", "Lecithin", "Lithium", "Vitamin B12", "Vitamin C", "Chromium Picolinate", "Ginseng", "Glutamine", "Inositol", "S-adenosylmethionine (SAMe)", "St. John's Wort", "Avoidance of Vanadium"]
  },
  {
  "id": 17,
    "name": "Bladder Infection",
    "definition": "In urinary tract infections, bacterial pathogens originate in the rectal flora and colonize the urethra, ascending to the bladder. Current evidence shows that alteration of the normal vaginal flora, especially loss of H202-producing lactobacilli, may predispose women to colonization with E. coli and UTI."
    "supplements": ["Cranberry", "Uva Ursi", "Buchu", "Cleavers", "Goldenseal", "Goldenrod", "Horseradish (combined with nasturtium)", "Juniper", "Pau D'arco (Lapacho)", "Mannose", "Methionine", "Probiotics", "Sandalwood", "Vitamin C", "Zinc"]
  },
  {
  "id": 18,
    "name": "Bronchitis",
    "definition": "Acute bronchitis is characterized by inflammation of the bronchi and clinically expressed as cough, which may include sputum production. This is usually caused by a viral upper airway infection. \n\nChronic bronchitis is normally limited to patients with chronic obstructive pulmonary disease, consisting of a cough which lasts at least three months in at least two successive years. \n\nIt should be reiterated that bronchitis is most often caused by a virus. However, 60-90% of patients with acute bronchitis are given antibiotics by physicians."
    "supplements": ["Essential Oil Monoterpenes (consists of cineole from eucalyptus, d-limonene from citrus fruit, and alpha-pinene from pine) (Oral)", "Pelargonium sidoides", "All Treatments Used for Colds or Asthma", "Combination Product Containing Horseradish and Nasturtium", "Combination Product Containing Thyme and Primrose Root Extract", "Elecampane", "Essential Oils (Inhaled)", "Horehound", "Licorice", "Marshmallow", "Mullein", "Slippery Elm", 'Vitamin C", "Yerba Santa", "Avoidance of Dairy", "Treatments for the Common Cold"]
  },
  {
  "id": 19,
    "name": "Cancer",
    "definition": "In all types of cancer, some of the bodyÍs cells begin to abnormally replicate, spreading into surrounding tissues. In some cancers, these cells combine to form a growth called a tumor. A malignant (cancerous) tumor can spread into nearby tissues and organs. These cells can also break off and travel through the bloodstream or lymph to form new tumors in different areas of the body. \n\nThis is a very brief, general description of cancer. More info can be found at http://www.cancer.gov/about-cancer/understanding/what-is-cancer."
    "supplements": ["Antioxidants", "Folate", "Garlic", "Green Tea", "Isoflavones", "Selenium", "Soy", "Vitamin C", "Vitamin E", "Active Hexose Correlated Compound (AHCC)", "Betulin", "Black Tea", "Blue-Green Algae", "Boron", "Bromelain", "Calcium", "Cartilage", "Catechins (From Green Tea)", "Citrus Bioflavonoids", "Conjugated Linoleic Acid (CLA)", "Cordyceps", "Coriolus versicolor", "Diindolylmethane (DIM)", "Ellagic Acid", "Fiber", "Omega-3 Fatty Acids (Fish Oil)", "Flaxseed (Lignans)", "Flavonoid", "Genistein", "Ginseng", "Glycine", "Grapes (Resveratrol)", "Grass Pollen", "Indole-3-Carbinol (I3C)", "Inositol Hexaphosphate (Phytic Acid),Isoflavones ,Kelp ,Licorice ,Ligustrum ,Melatonin ,Methyl Sulfonyl Methane (MSM) ,Milk Thistle ,N-Acetylcysteine (NAC) ,Nettle ,Oligomeric Proanthocyanidins (OPCs) ,Omega-3 Fatty Acids (Fish Oil),Pawpaw Tree Bark ,Probiotics ,Quercetin ,Rosemary ,Schisandra ,Shiitake ,Selenium,Sulforaphane ,Curcumin (Turmeric),Vitamin B ,Vitamin D,Vitamin E,Increase Intake of Fruits and Vegetables] 
  },
  {
  "id": 20,
    "name": "Cataract",
    "definition": "The lens of the eye is composed of epithelial cells. Unlike other epithelial cells in the body, those of the lens are not shed as they become old and/or damaged. The lens is thereby more susceptible to the degenerative effects of aging.  \nMost risk factors are environmental stressors that lead to the formation of toxins or impairment of antioxidants, which include age, smoking, alcohol consumption, sun exposure, malnutrition & physical inactivity, metabolic syndrome, diabetes mellitus, corticosteroid use, and (possibly) statin use."
     "supplements": ["Antioxidants", "Beta-Carotene", "Lutein", "Lycopene", "Vitamin C", "Vitamin E", "Bilberry", "Carnosine", "Ginkgo biloba", "Alpha-Lipoic Acid (ALA)", "Oligomeric Proanthocyanidins (OPCs)", "Selenium", "Taurine", "Curcumin (Turmeric)", "Vitamin B2 (Riboflavin)", "Vitamin B3 (Niacin)", "Whey Protein", "Zinc"] 
  },
  {
  "id": 21,
    "name": "Cavities (Prevention)",
    "definition": "When bacteria in the mouth metabolize carbohydrates, the pH of the oral cavity is lowered (made more acidic). Saliva is able to buffer this acid until the pH is less than 5.5. At the pH, demineralization of the tooth enamel occurs. Over time, the surface of the enamel can develop a ñwhite spot lesion.î Without intervention (teeth cleaning, plaque removal, remineralization), a cavity can result."
    "supplements": ["Xylitol", "Sanguinaria (Bloodroot)", "Black Tea", "Calcium", "Chitosan", "Cranberry", "Hops", "Myrrh", "Probiotics", Bee Propolis ,Sanguinaria (Bloodroot)_,Sorbitol]     
  },
  {
  "id": 22,
    "name": "Canker Sore",
    "definition": "Canker sores are round, clearly defined, small, painful ulcers that heal within 10 to 14 days without scarring. It is proposed that canker sores develop in response to a toxin or foreign substance, which elicits an immune response at the cellular level."
    "supplements": ["Acidophilus", "Calendula", "Caraway", "Deglycyrrhizinated Licorice (DGL)", "Omega-3 Fatty Acids (Fish Oil)", "Lactic Acid", "Oak Bark", "Rhizophora mangle (Red Mangrove)", "Slippery Elm", "Vitamin B1", "Witch Hazel"] 
  },
  {
  "id": 23,
    "name": "Cholesterol, High",
    "definition": "High cholesterol is also called hyperlipidemia, which means there is an elevated amount of lipids (fats) in the blood. Compared with people with normal cholesterol, people with high cholesterol have a higher risk of cardiovascular disease, coronary artery disease, cerebrovascular disease, and peripheral vascular disease. The higher your cholesterol, the higher your risk of these problems.\n\nLDL cholesterol = ñBad Cholesterolî LDL raises your risk of heart attacks, strokes, and other health problems.\n\nHDL cholesterol = ñGood Cholesterolî  Having high HDL levels lowers your risk of heart attacks, strokes, and other health problems.\n\nTriglycerides are not cholesterol. Having high triglycerides also seems to increase the risk of heart attacks and strokes.\n\nIdeal Cholesterol Levels:\n\nTotal cholesterol below 200\n\nLDL cholesterol below 130 (or much lower, if already at risk of heart attacks or strokes).\n\nHDL cholesterol above 60\n\nNon-HDL cholesterol below 160 (or lower, if already at risk of heart attacks or strokes).\n\nTriglycerides below 150"
    "supplements": ["Artichoke Leaf", "Fiber, Soluble (psyllium, hydroxymethylcellulose, beta-glucan)", "Soy", "Stanols", "Vitamin B3 (Niacin)", "Achillea wilhelmsii", "Alfalfa", "Ashwagandha", "Berberine (Goldenseal)", "Beta-Glucan", "Black Cohosh", "Black Tea", "Broccoli and Cabbage", "Caigua", "Calcium", "Carob", "Chitosan", "Cinnamon", "Chocolate", "Chromium", "Cordyceps", "Creatine", "Curcumin (Turmeric)", "Eclipta alba", "Fenugreek", "Omega-3 Fatty Acids (Fish Oil)", "Flaxseed", "Flaxseed Oil", "Gamma Oryzanol", "Garlic", "Genistein", "Glucomannan", "Green Tea", "Guggul", "He Shou Wu", "Honey", "Krill Oil", "L-Carnitine", "Lecithin", "Maitake", "Mesoglycan", "Multivitamin + Mineral Supplement", "Nopal Cactus", "Olive Oil", "Pantethine", "Prebiotics", "Probiotics", "Red Yeast Rice", "Royal Jelly", "Sage Leaf Extract", "Soy Protein", "Spirulina", "Tocotrienols", "Consumption of Nuts"] 
  },
  {
  "id": 24,
    "name": "Chronic Fatigue Syndrome",
    "definition": "Chronic Fatigue Syndrome (CFS) is also referred to as Systemic exertion intolerance disease (SEID). Little objective information is available regarding cause of this debilitating condition other than it is a relevant disorder.\n\nSymptoms of CFS are present for at least six months and have moderate, substantial, or severe intensity at least one-half of the time. Other criteria include: postexertional malaise, sleep problems, cognitive impairment, and orthostatic-related symptoms.\n\nCFS is not a new disease. It has had proposed diagnoses dating back to the mid-1700s. Current hypothesized etiologies are viruses, immune dysfunction, endocrine-metabolic dysfunction, and neuropsychiatric factors."
    "supplements": ["Beta-Carotene", "Carnitine", "Chocolate", "Dehydroepiandrosterone (DHEA)", "Echinacea", "Eleutherococcus senticosus (Siberian Ginseng)", "Essential Fatty Acids (GLA and Fish Oil)", "Licorice", "NADH", "Panax Ginseng"]  
  },
  {
  "id": 25,
    "name": "Cirrhosis of Liver",
    "definition": "Cirrhosis is late stage hepatic (liver) fibrosis (scarring). It is generally considered to be irreversible in its advanced stages, at which point liver transplant is considered.\n\nPatients with cirrhosis are susceptible to a variety of complications, and their life expectancy is markedly reduced.\n\nMost common causes of cirrhosis of the liver:\n\nHeavy alcohol use _ People who abuse alcohol or who are addicted to it are most at risk for cirrhosis.\n\nHepatitis B or hepatitis C _ Viruses cause these liver diseases. People can catch the viruses by sharing needles or having sex with people who are infected.\n\nNonalcoholic steatohepatitis (NASH) _ People with this condition often donÍt drink alcohol. Doctors arenÍt sure what causes NASH, but many people who have it are obese and have diabetes."
    "supplements": ["Milk Thistle", "Antioxidants", "BCAAs (Branched-chain Amino Acids)", "Calcium and Vitamin D", "Oligomeric Proanthocyanidins (OPCs)", "Ornithine Alpha-Ketoglutarate (OKG)", "Phosphatidylcholine", "S-adenosylmethionine (SAMe)"]  
  },
  {
  "id": 26,
    "name": "Cold Sores",
    "definition": "Cold sores are caused by Herpes Simplex Virus 1 (HSV1), which manifests as vesicular lesions on the lips and oral mucosa. HSV1 can spread to other anatomic locations such as the genitalia, liver, lung, eye, and central nervous system."
    "supplements": ["L-Lysine (Prevention)", "Melissa (Lemon Balm) (Topical)", "Aloe Vera (Topical)", "Zinc (Topical)", "Adenosine Monophosphate (AMP)", "Astragalus", "Bee Propolis", "Cat's Claw", "Elderberry", "Eleutherococcus senticosus (Siberian Ginseng)", "Kelp", "Sage/Rhubarb Cream", "Sandalwood", "Tea Tree Oil", "Vitamin C", "Witch Hazel"]  
  },
  {
  "id": 27,
    "name": "Cold",
    "definition": "The term \"common cold\" refers to a mild upper respiratory viral infection involving, to variable degrees, nasal congestion and discharge, sneezing, sore throat, cough, low-grade fever, headache, and malaise."
    "supplements": ["Andrographis (Often Combined With Eleutherococcus senticosus)", "Echinacea (Sometimes Combined With Wild Indigo and White Pine)", "Essential Oil Monoterpenes (Eucalyptis, Citrus, Pine)", "Garlic", "Panax Ginseng", "Probiotics", "Vitamin C", "Zinc", "Arginine", "Ashwagandha", "Astragalus", "Chlorella", "Colostrum", "Elderberry", "Ginger", "Green Tea Extract", "Honey", "Hyssop, "Ivy Leaf", "Kelp", "Kudzu", "Linden", "Maitake", "Marshmallow", "Mistletoe", "Mullein", "Oregano", "Osha", "Pelargonium sidoides", "Peppermint", "Bee Propolis", "Reishi", "Thymus Extract", "Sage", "Suma", "Vitamin D", "Yarrow"] 
  },
  {
  "id": 28,
    "name": "Colic",
    "definition": "There is no standard definition for the term \"colic.\" For clinical purposes, we define it broadly as crying for no apparent reason that lasts for _3 hours per day and occurs on _3 days per week in an otherwise healthy infant <3 months of age. \n\nThe cause of colic is unknown. There is a wide range of proposed hypotheses including gastrointestinal, biological and psychosocial causes."
    "supplements": ["Fennel Seed Oil", "Probiotics (L. Reuteri)", "Rooibos (Red Tea)"] 
  },
  {
  "id": 29,
    "name": "Conjunctivitis (Pink Eye)",
    "definition": "Conjunctivitis is inflammation of the mucous membrane that lines the eye and the inside surface of the eyelid. The conjunctiva is highly vascularized and is the site of considerable immunologic activity. The redness seen in conjunctivitis is inflammation of these blood vessels. \n\nConjunctivitis is either contagious (either bacterial or viral) or noncontagious (allergic or nonallergic).\n\nConjunctivitis can be sight-threatening, so it is imperative to see a physician to distinguish which bacteria is the cause and to rule out different diagnoses."
    "supplements": ["Barberry", "Bee Propolis", "Calendula", "Chamomile", "Eyebright", "Goldenseal", "Oregon Grape", "Vitamin A"] 
  },
  {
  "id": 30,
    "name": "COPD",
    "definition": "Chronic obstructive pulmonary disease (COPD), a common preventable and treatable disease, is characterized by persistent airflow limitation that is usually progressive and associated with an enhanced chronic inflammatory response in the airways and the lung to noxious particles or gases. Exacerbations and comorbidities contribute to the overall severity in individual patients."
    "supplements": ["N-Acetylcysteine (NAC)", "Ayurvedic Herbal Medicine", "L-Carnitine", "Coenzyme Q10 (CoQ10)", "Creatine", "Echinacea (in Combination With Wild Indigo and White Pine)", "Essential Oil Monoterpenes", "Omega-3 Fatty Acids (Fish Oil)", "Ivy Leaf", "Plantain", "Qigong"] 
 },
  {
  "id": 31,
    "name": "Crohn's Disease",
    "definition": "Crohn's disease is a disorder characterized by inflammation of the gastrointestinal tract. Most common symptoms are prolonged diarrhea, abdominal pain, fatigue and weight loss. The cause of CrohnÍs disease is unknown."
    "supplements": ["Boswellia", "Probiotics", "Wormwood"] 
  },
  {
  "id": 32,
    "name": "Dandruff",
    "definition": "The medical term for dandruff is seborrheic dermatitis. The cause of dandruff is unknown, but requires sebaceous glands, possibly to make a more favorable environment for fungi to grow."
    "supplements": ["Aloe Vera (Topical)", "Anti-Candida Supplements", "Tea Tree Oil", "Vitamin B6"]
  },
  {
  "id": 33,
    "name": "Dementia",
    "definition": "Dementia refers to progressive cognitive impairment in one or more cognitive domains, most often memory, that represents a significant decline from previous baseline and interferes with functional independence. The cause of dementia is unknown."
    "supplements": ["Ginkgo biloba", "Huperzine A", "Phosphatidylserine", "Vinpocetine", "Carnosine", "Citrulline", "Choline Alfoscerate", "Dehydroepiandrosterone (DHEA)", "Lemon Balm", "N-Acetylcysteine (NAC)", "Sage", "Vitamin B6", "Vitamin B12", "Vitamin E"]
  },
  {
  "id": 34,
    "name": "Depression",
    "definition": "Depression (major depressive disorder or clinical depression) is a common but serious mood disorder. It causes severe symptoms that affect how you feel, think, and handle daily activities, such as sleeping, eating, or working. To be diagnosed with depression, the symptoms must be present for at least two weeks.î   -National Institute of Mental Health"
    "supplements": ["St. John's Wort", "5-Hydroxytryptophan (5-HTP)", "Acetyl-L-Carnitine", "Beta-Carotene", "Chromium", "Damiana", "Dehydroepiandrosterone (DHEA) ,Omega-3 Fatty Acids (Fish Oil),Folate ,Ginkgo biloba,Inositol ,Lavender ,Multivitamin Supplement,NADH ,Phenylalanine ,Phosphatidylserine ,Pregnenolone ,Rhodiola rosea ,S-Adenosylmethionine (SAMe) ,Saffron,Tyrosine ,Vitamin B6 ,Vitamin B12 ,Vitamin D3 ,Zinc,Exercise]
  },
  {
  "id": 35,
    "name": "Diabetes (Blood Sugar Control)",
    "definition": "Diabetes is a metabolic disease in which the bodyÍs inability to produce any or enough insulin causes elevated levels of glucose in the blood."
    "supplements": ["Aloe Vera (Topical)", "Chromium (Alone or With Biotin)", "Ginseng", "Arginine", "Berberine (Goldenseal)", "Black Tea", "Biotin", "Bitter Melon", "Caiapo", "Carnitine", "Cayenne", "Cinnamon", "Cod Protein", "Coenzyme Q10 (CoQ10)", "Coccinia indica", "Dehydroepiandrosterone (DHEA)", "Fenugreek", "Garlic", "Genistein", "Ginger", "Glucomannan", "Green Tea", "Guggul", "Gymnema", "Holy Basil", "Alpha-Lipoic Acid (ALA)", "Magnesium", "Medium-Chain Triglycerides (MCTs)", "Melatonin", "Milk Thistle", "Niacinamide", "Nopal Cactus", "Onion", "Ooolong Tea", "Oligomeric Proanthocyanidins (OPCs)", "Pterocarpus", "Sage Leaf Extract", "Salacia oblonga", "Salvia hispanica", "Salt Bush", "Vanadium", "Vitamin E", "Zinc"]
  },
  {
  "id": 36,
    "name": "Diverticular Disease (Fiber Supplements)",
    "definition": "Diverticulitis occurs when small, bulging sacs or pouches that form on the inner wall of the intestine (diverticula) become inflamed or infected. Most often, these pouches are in the large intestine (colon)."
    "supplements": ["Psyllium", "Glucomannan", "Methylcellulose"]
  },
  {
  "id": 37,
    "name": "Drug Addiction",
    "definition": "Drug abuse is continued misuse of drugs even when faced with drug-related job, legal, health, or family difficulties. Drug addiction is long-term, compulsive drug use. The person may attempt to stop using drugs, but repeatedly return to drug use despite physical, emotional, or social harm. Drug dependence means that the body has begun to require the drug in higher doses to have the same effect and to avoid withdrawal symptoms. Drugs that commonly abused include: The addictive potential of each drug is different."
    "supplements": ["N-Acetylcysteine (NAC)", "Passionflower"]
  },
  {
  "id": 38,
    "name": "Deep Vein Thrombosis (DVT)",
    "definition": "Deep vein thrombosis (DVT) refers to the formation of one or more blood clots in one of the body's large veins, most commonly in the lower limbs. DVTs can be caused by heredity or they can be acquired.\n\nThere are three proposed theories regarding why DVTs occur: \n\nAlterations in blood flow (ie, stasis)\n\nVascular endothelial injury\n\nAlterations in the constituents of the blood (ie, inherited or acquired hypercoagulable state)"
    "supplements": ["Aloe Vera (Topical)", "Bromelain", "Horse Chestnut", "Mesoglycan", "Vitamin E"]
  },
  {
  "id": 39,
    "name": "Dyspepsia",
    "definition": "Dyspepsia is diagnosed by at least one of the following symptoms:\n\nPostprandial (after a meal) fullness (classified as postprandial distress syndrome)\n\nEarly satiation (inability to finish a normal sized meal, also classified as postprandial distress syndrome)\n\nEpigastric (upper abdomen) pain or burning (classified as epigastric pain syndrome)\n\nAlthough there are several organic causes for dyspepsia, the main causes are peptic ulcer disease, gastroesophageal reflux, gastric malignancy, and nonsteroidal anti-inflammatory drug (NSAID)-induced dyspepsia."
    "supplements": ["Artichoke Leaf", "Curcumin (Turmeric)", "Astaxanthin", "Banana Powder", "Betaine Hydrochloride", "Boldo", "Cayenne", "Chamomile", "Essential Oils of Carminative Herbs", "Herbal Combinations Containing Candytuft (Iberis amara)", "Lemon Balm", "Melatonin", "Pancreatic Enzymes", "Probiotics"]
  },
  {
  "id": 40,
    "name": "Ear Infection",
    "definition": "An ear infection, medically referred to as Otitis Media, is the presence of middle ear fluid and inflammation due to obstruction of the eustachian tube. \n\nMost recent evidence shows that ear infections start with bacterial infection in the back of throat and nasal cavity. These bacteria stick together and spread to the inner ear."
    "supplements": ["Herbal Ear Drop Combinations Containing Mullein and Garlic", "Xylitol", "Andrographis", "Echinacea", "Garlic", "Ginseng", "Probiotics", "Vitamin C", "Zinc"]
  },
  {
  "id": 41,
    "name": "Eczema (Oral)",
    "definition": "Eczema is a chronic, itchy, inflammatory skin disease, referred to medically as atopic dermatitis. There have been negative and conflicting scientific evidence regarding allergens as cause of eczema."
    "supplements": ["Breastfeeding", "Probiotics", "Quercetin", "Red Clover", "Omega-3 Fatty Acids (Fish Oil)", "Sea Buckthorn", "Viola Tricolor" and "Centella Asiatica", "Zinc"]
  },
  {
  "id": 42,
    "name": "Eczema (Topical)",
    "definition": "Eczema is a chronic, itchy, inflammatory skin disease, referred to medically as atopic dermatitis. There have been negative and conflicting scientific evidence regarding allergens as cause of eczema."
    "supplements": ["Calendula", "Chamomile", "Gamma-Linolenic Acid (GLA) from Borage Oil", "Licorice", "Red Vine Leaf", "St. Johns Wort", "Vitamin B12"]
  },
  {
  "id": 43,
    "name": "Endometriosis",
    "definition": "Endometriosis is a painful, chronic disease that occurs when tissue like that which lines the uterus (endometrium) is found outside the uterus. \n\nThis misplaced tissue develops into growths or lesions which respond to the menstrual cycle in the same way that the tissue of the uterine lining does. Each month the tissue builds up, breaks down, and sheds. Menstrual blood flows from the uterus and out of the body through the vagina, but the blood and tissue shed from endometrial growths has no way of leaving the body. This results in internal bleeding, breakdown of the blood and tissue from the lesions, and inflammation, which can cause pain, infertility, scar tissue formation, adhesions, and bowel problems.\n\nThe cause of endometriosis is unknown."
    "supplements": ["Chasteberry", "Cramp Bark", "Dandelion Root", "Omega-3 Fatty Acids (Fish Oil)"]
  },
  {
  "id": 44,
    "name": "Epilepsy",
    "definition": "Epilepsy is a condition that causes chronic seizures. Seizures are caused by abnormal electrical activity in the brain. \n\nCauses of seizures: \n\nIn Newborns:æ\n* Brain malformations\n* Lack of oxygen during birth\n* Low levels of blood sugar, blood calcium, blood magnesium or other eletrolyte problems\n* Inborn errors of metabolism\n* Intracranial hemorrhage\n* Maternal drug useæ\n\nIn Infants and Children:æ\n* Fever (febrile seizures)\n* Brain tumor (rarely)\n* Infections\n\nIn Children and Adults:\n* Congenital conditions (Down's syndrome; Angelman's syndrome; tuberous sclerosis and neurofibromatosis)\n* Genetic factors\n* Progressive brain disease (rare)\n* Head trauma\n\nIn Seniors:\n* Stroke\n* Alzheimer's disease\n* Trauma"
    "supplements": ["Omega-3 Fatty Acids (Fish Oil)", "Manganese", "Melatonin", "Nigella sativa", "Taurine"]
  },
  {
  "id": 45,
    "name": "Erectile Dysfunction",
    "definition": "Male sexual dysfunction includes diminished libido, erectile dysfunction (ED), and abnormal ejaculation.\n\nLibido declines with testosterone deficiency, stress, relationship issues, depression, systemic illness, and in association with the use of a number of prescription and recreational drugs. \n\nErectile disfunction can be vascular, neurologic, muscular, hormonal, drug induced, and psychogenic.\n\nPremature ejaculation (PE) is a male sexual dysfunction characterized by ejaculation that almost always occurs within approximately one minute of vaginal penetration and that results in distress for the male.\n\nRetrograde ejaculation can occur if the bladder neck sphincter is damaged during prostate surgery. It may also occur if alpha-adrenergic impulses responsible for clamping down the bladder neck sphincter fail, resulting in retrograde rather than antegrade ejaculation. Many men with retrograde ejaculation present with infertility due to azoospermia. \n\nFailure to ejaculate in men with adequate erectile function is a common side effect of antidepressant medication and some alpha-adrenergic antagonist drugs."
    "supplements": ["Carnitine", "Ginseng", "Arginine", "Avena sativa", "Butea superba", "Catuaba", "Cordyceps", "Damiana", "Dehydroepiandrosterone (DHEA)", "Diindolylmethane (DIM)", "Eleutherococcus senticosus (Siberian Ginseng)", "Ginkgo biloba", "Horny Goat Weed", "L-Citrulline", "Maca (Lepidium meyenii)", "Mucuna pruriens", "Melatonin", "Molybdenum", "Pine Bark Extract and Arginine", "Muira Puama (Potency Wood)", "Polypodium vulgare", "Pomegranate", "Pygeum", "Rhodiola rosea", "Saw Palmetto", "Schisandra", "Suma", "Tribulus terrestris", "Velvet Antler", "Zinc"]
  },
  {
  "id": 46,
    "name": "Fibromyalgia",
    "definition": "Fibromyalgia (FM) is characterized by chronic, widespread musculoskeletal pain and fatigue, often accompanied by cognitive (brain fog) and psychiatric (depression and anxiety) disturbances.\n\nIt is common for fibromyalgia to coexist with IBS, migraines, sleep disorders, and rheumatic diseases.\n\nResearch so far has not shown a cause or manner of development of fibromyalgia. There are many proposed triggers, such as certain infections, emotional stress, or physical trauma."
    "supplements": ["5-Hydroxytryptophan (5-HTP)", "Capsaicin", "S-Adenosylmethionine (SAMe)", "Carnitine", "Dehydroepiandrosterone (DHEA)", "Essential Oils (Topical)", "Malic Acid Plus Magnesium", "Melatonin", "Selenium", "Vitamin B1", "Vitamin E", "Vegan Diet"] 
  },
  {
  "id": 47,
    "name": "Fungal Infection",
    "definition": "Dermatophyte infections are common worldwide, and dermatophytes are the prevailing causes of fungal infection of the skin, hair, and nails. AthleteÍs foot is a dermatophyte (fungal) infection of the foot, contracted from an infected person or animal."
    "supplements": ["Barberry", "Betaine Hydrochloride", "Caprylic Acid", "Garlic", "Grapefruit Seed Extract", "Pau D'arco (Lapacho)", "Essential Oils (Lavender, Oregano, Peppermint, Tea Tree Oil)", "Probiotics", "Red Thyme"]  
  },
  {
  "id": 48,
    "name": "",
    "definition": "Send Athlete's Foot to this. Combine supplements (check research)"
    "supplements": []  
  },
  {
  "id": 49,
    "name": "Gallstones",
    "definition": "Gallstones are small stones that form inside the gallbladder. Normally, the gallbladder fills with bile in between meals. Then, when you eat fatty foods, the gallbladder empties the bile into the intestine. Sometimes, though, gallstones clog the gallbladder and keep it from draining. Other times, gallstones just irritate the gallbladder. If the gallstones are pushed out of the gallbladder, they can keep the liver or pancreas from draining.\n\nGallstones are more common in women, people over the age of 40, and people with a family history of gallstones.\n\nOther factors that increase the risk of developing gallstones are:\n\n- Pregnancy\n\n- Use of medicines that contain estrogen (such as birth control pills)\n\n- Obesity\n\n- Frequent fasting\n\n- Rapid weight loss (including patients who have surgical weight loss treatments)\n\n- Lack of physical activity\n\n- Diabetes mellitus\n\n- Sickle cell disease (and other conditions associated with rapid destruction of red blood cells, such as in patients with mechanical heart valves)\n\n- Cirrhosis or severe scarring of the liver\n\n- Some medicines\n\nMost gallstones are made of cholesterol, but sometimes they are made of pigment, which consists of calcium salts of bilirubin, phosphate, carbonate and other anions."
     "supplements": ["Artichoke Leaf", "Betaine Hydrochloride", "Boldo", "Dandelion Root", "Fumitory", "Greater Celandine", "Milk Thistle", "Peppermint", "Curcumin (Turmeric)", "Vitamin C"]
  },
  {
  "id": 50,
    "name": "Gastritis",
    "definition": "Gastritis is inflammation of the stomach lining. There is acute and chronic gastritis. \n\nGastritis is commonly secondary to infectious or autoimmune etiologies, although it can also result from drugs or hypersensitivity reactions. Possible causes are: \n\nAn infection of H. pylori bacteria in the stomach\n\nNonsteroidal antiinflammatory drugs (NSAIDS) such as aspirin, ibuprofen and naproxen\n\nAlcohol use\n\nAn autoimmune disease (Autoimmune Metaplastic Atrophic Gastritis [AMAG]) causes the immune system to attack cells in the stomach\n\nOther infections"
    "supplements": ["Aloe Vera", "Beeswax Extract", "Betaine Hydrochloride", "Bioflavonoids", "Butterbur", "Cats Claw", "Cinnamon", "Cranberry", "Omega-3 Fatty Acids (Fish Oil)", "Gamma Oryzanol", "Garlic", "Glutamine", "Marshmallow", "Methyl Sulfonyl Methane (MSM)", "Probiotics", "Selenium", "Slippery Elm", "Suma", "Vitamin A", "Vitamin C", "Wood Betony", "Zinc"] 
  },
  {
  "id": 51,
    "name": "GERD",
    "definition": "Acid reflux is when the acid that is normally in the stomach backs up into the esophagus. Gastroesophageal Reflux Disease (GERD) is chronic acid reflux that causes irritation and possibly damage to the lining of the esophagus.\n\nThe development of GERD reflects the balance between injurious or symptom-eliciting factors (reflux events, acidity of refluxate, esophageal hypersensitivity) and defensive factors (esophageal acid clearance, mucosal integrity).  For one or more reasons, this balance becomes impaired in patients who develop GERD. \n\nAn essential concept in the pathogenesis of gastroesophageal reflux disease (GERD) is that the extent of symptoms and of mucosal injury is proportional to the frequency of reflux events, the duration of mucosal acidification, and the caustic potency of refluxed fluid. For one or more reasons, this balance becomes impaired in patients who develop GERD."
    "supplements": ["Aloe Vera", "Betaine Hydrochloride", "Bladderwrack", "Carob", "Calcium Carbonate", "Hydrotalcite", "Licorice", "Marshmallow"] 
  },
  {
  "id": 52,
    "name": "Glaucoma",
    "definition": "Glaucoma is a disease that damages your eye's optic nerve. It usually happens when fluid builds up in the front part of your eye. That extra fluid increases the pressure in your eye, damaging the optic nerve."
    "supplements": ["Coleus Forskohlii", "Ginkgo biloba", "Alpha-Lipoic Acid (ALA)", "Magnesium", "Melatonin", "Omega-3 Fatty Acids (Fish Oil)", "Vitamin C"] 
  },
  {
  "id": 53,
    "name": "Headache, Cluster",
    "definition": "Cluster headaches are severe, debilitating headaches that occur repeatedly for weeks to months at a time, followed by periods with no headache.\n\nCluster headaches:\n\nBegin quickly without any warning and reach a peak within a few minutes.\n\nThe headache is usually deep, excruciating, continuous, and explosive in quality, although occasionally it may be pulsatile and throbbing.\n\nThe attack may occur up to eight times per day but is usually short in duration (between 15 minutes and three hours).\n\nThe pain typically begins in or around the eye or temple; less commonly it starts in the face, neck, ear, or side of the head.\n\nThe pain is always on one side.\n\nMost people with cluster headache are restless and may pace or rock back and forth when an attack is in progress.\n\nCluster headaches are associated with eye redness and tear production on the side of the pain, a stuffy and runny nose, sweating, and pale skin.\n\nSome people are light sensitive in the eye on the affected side.\n\nCluster headaches can begin at any age. People with cluster headaches are more likely to have family members who also have cluster headaches. Drinking alcohol can bring on a cluster headache."
    "supplements": ["Magnesium", "Melatonin"] 
  },
  {
  "id": 54,
    "name": "Headache, Tension",
    "definition": "A tension headache is generally a diffuse, mild to moderate pain that's often described as feeling like a tight band around the head."
    "supplements": ["5-Hydroxytryptophan (5-HTP)", "Butterbur"] 
  },
  {
  "id": 55,
    "name": "Heart Attack (Heart cell damage post heart attack )",
    "definition": "A heart attack occurs when the blood flow that brings oxygen to the heart muscle is severely reduced or cut off completely. This happens because coronary arteries that supply the heart muscle with blood flowæcan slowly becomeænarrow from a buildup of fat, cholesterol and other substances that together are called plaque. This slow process is known as atherosclerosis. When a plaque in a heart artery breaks, a blood clot forms around the plaque. This blood clot can block the blood flow through the heart muscle. When the heart muscle is starved for oxygen and nutrients, it is called ischemia When damage or death of part of the heart muscle occurs as a result of ischemia, it is called a heart attack or myocardial infarction (MI).î\n\nwww.heart.org"
    "supplements": []
   },
  {
  "id": 56,
    "name": "Heart Attack (Prevention)",
    "definition": "A heart attack occurs when the blood flow that brings oxygen to the heart muscle is severely reduced or cut off completely. This happens because coronary arteries that supply the heart muscle with blood flowæcan slowly becomeænarrow from a buildup of fat, cholesterol and other substances that together are called plaque. This slow process is known as atherosclerosis. When a plaque in a heart artery breaks, a blood clot forms around the plaque. This blood clot can block the blood flow through the heart muscle. When the heart muscle is starved for oxygen and nutrients, it is called ischemia When damage or death of part of the heart muscle occurs as a result of ischemia, it is called a heart attack or myocardial infarction (MI).î\n\nwww.heart.org"
    "supplements": ["Coenzyme Q10 (CoQ10)", "Omega-3 Fatty Acids (Fish Oil)", "Garlic Oil", "Glycine", "Hawthorn", "Inosine", "L-carnitine", "Alpha-Lipoic Acid (ALA)", "Red Yeast Rice", "Selenium"]
   },
  {
  "id": 57,
    "name": "Hemmorhoid",
    "definition": "Hemorrhoids are swollen veins in the rectum. They can cause itching and pain, and bleeding during a bowel movement. \n\nHemorrhoids can arise due to increased pressure in the lower rectum. The likelihood of developing hemorrhoids increases with age. This is because the tissues that support the veins in the rectum and anus can weaken over time."
    "supplements": ["Citrus Bioflavonoids (diosmin and hesperidin)", "Oxerutins", "Bilberry", "Butcher's Broom", "Calendula (Topical)", "Collinsonia (Oral or Topical)", "Gotu Kola", "Horse Chestnut", "Mesoglycan", "Oak Bark (Topical)", "Oligomeric Proanthocyanidins (OPCs)", "Slippery Elm", "Witch Hazel"]
   },
  {
  "id": 58,
    "name": "Hepatitis (Viral)",
    "definition": "Hepatitis means inflammation of the liver. The liver is a vital organ that processes nutrients, filters the blood, and fights infections. When the liver is inflamed or damaged, its function can be affected. Heavy alcohol use, toxins, some medications, and certain medical conditions can cause hepatitis. However, hepatitis is most often caused by a virus. In the United States, the most common types of viral hepatitis are Hepatitis A, Hepatitis B, and Hepatitis C.î\n\nCenters for Disease Control and Prevention (CDC)"
    "supplements": ["Astragalus", "Ayurvedic Herbal Medicine", "Cordyceps", "Lecithin", "Licorice", "Liver Extract", "Milk Thistle", "Phosphatidylcholine", "Reishi", "S-adenosylmethionine (SAMe)", "Schisandra", "Taurine", "Thymus Extract", "Vitamin C", "Vitamin E", "Whey Protein"]
   },
  {
  "id": 59,
    "name": "Herpes",
    "definition": "Herpes simplex virus type 1 (HSV-1) is a member of the family of herpesviruses that includes HSV-1, herpes simplex virus type 60 (HSV-2), cytomegalovirus, Epstein Barr virus, and human herpesviruses 6, 7, and 8."
    "supplements": ["L-Lysine", "Melissa (Lemon Balm) (Topical)", "Aloe Vera", "Zinc (Topical)", "Adenosine Monophosphate (AMP)", "Astragalus", "Bee Propolis", "Cat's Claw", "Elderberry", "Eleutherococcus senticosus (Siberian Ginseng)", "Kelp", "Sage/Rhubarb Cream", "Sandalwood", "Tea Tree Oil", "Vitamin C", "Witch Hazel"]
   },
  {
  "id": 60,
    "name": "Hirsuitism",
    "definition": "Hirsutism, defined as excessive male-pattern hair growth, affects between 5 and 10 percent of women of reproductive age. It may be the initial, and possibly only, sign of an underlying androgen disorder, the cutaneous manifestations of which may also include acne and male-pattern balding (androgenetic alopecia). The most common cause of hirsutism is polycystic ovary syndrome (PCOS)."
    "supplements": []
   },
  {
  "id": 61,
    "name": "Hypertension",
    "definition": "Hypertension is the medical term for high blood pressure. Blood pressure refers to the pressure that blood applies to the inner walls of the arteries. Arteries carry blood from the heart to other organs and parts of the body.\n\n\nHigh blood pressure can put you at risk for heart attack, stroke, and kidney disease. It does not usually cause symptoms, but it can be very serious.\n\nIdeal blood pressure is 120/80. The top number (systolic) is the pressure inside your arteries when your heart is contracting . The bottom number (diastolic) is the pressure inside your arteries when your heart is relaxed.\n\nHigh Blood Pressure is a top number of 140 or above and/or a bottom number of 90 or above."
    "supplements": ["Coenzyme Q10 (CoQ10)", "Stevia", "Coleus forskohlii", "Bacailin", "Barberry", "Black Tea", "Calcium", "Chocolate", "Cinnamon", "Cordyceps", "Fiber", "Omega-3 Fatty Acids (Fish Oil)", "Eclipta alba", "GABA", "Garlic", "Glucomannan", "Green Coffee Bean Extract", "Grape Juice", "Hibiscus", "Achillea wilhelmsii", "Maca (Lepidium meyenii)", "Magnesium", "Melatonin", "Olive Leaf", "Milk fermented by Probiotics", "Potassium", "Quercetin", "Soy", "Vitamin C"] 
   },
  {
  "id": 62,
    "name": "Hot Flashes",
    "definition": "Hot flashes are almost always due to menopause. They often begin in the perimenopausal period, although in some women they do not begin until after menopause. \n\nHot flashes typically begin as the sudden sensation of heat centered on the upper chest and face that rapidly becomes generalized. The sensation of heat lasts from two to four minutes, is often associated with profuse perspiration and occasionally palpitations, and is sometimes followed by chills, shivering, and a feeling of anxiety. Hot flashes may range from an average of less than one each day to as many as one per hour during the day and night.\n\nHot flashes are mediated by thermoregulatory dysfunction at the level of the hypothalamus and are induced by estrogen withdrawal."
    "supplements": ["Black Cohosh", "Soy Isoflavones", "Alfalfa", "Chasteberry", "Damiana", "Dehydroepiandrosterone (DHEA)", "Dong Quai", "Estriol", "Evening Primrose Oil", "Flaxseed", "Gamma Oryzanol", "Ginseng", "Grass Pollen", "Licorice", "Lignans", "Oligomeric Proanthocyanidins (OPCs)", "Pueraria mirifica", "Progesterone Cream", "Red Clover", "Rhubarb", "Royal Jelly", "St. John's wort", "Suma", "Vitamin C", "Vitamin E", "Wild Yam"] 
   },
  {
  "id": 63,
    "name": "Hyperthyroidism",
    "definition": "The pituitary gland is located in the brain and produces thyroid-stimulating hormone (TSH), which stimulates the thyroid gland to produce two hormones (triiodothyronine [T3] and thyroxine [T4]). Hyperthyroidism occurs when the thyroid gland makes too much T3 and T4. These hormones regulate how the body uses and stores energy. \n\nGravesÍ disease is the most common cause of hyperthyroidism. The immune system produces an antibody that causes the thyroid to enlarge (referred to as a goiter) and produce an excessive amount of thyroid hormone (T3 and T4). The cause of GravesÍ disease is unknown. \n\nOther causes of hyperthyroidism:\n\nThyroid nodules are small growths in the thyroid gland which produce too much thyroid hormone. \n\nThyroiditis (inflammation) is a temporary condition that causes the thyroid to release too much thyroid hormone. \n\nSubacute (granulomatous) thyroiditis is thought to be caused by a virus. It causes a painful, tender, enlarged thyroid gland. The thyroid becomes inflamed and releases thyroid hormone into the blood stream; the hyperthyroidism resolves when the viral infection improves, and may also be followed by several months of hypothyroid symptoms. \n\nHyperthyroidism can also be caused by taking too much medication for hypothyroidism."
    "supplements": ["Bugleweed", "L-Carnitine", "Glucomannan", "Royal Jelly"] 
  },
  {
 "id": 64,
    "name": "Hypothyroidism",
    "definition": "Hypothyroidism is a condition in which the gland at the base of the front of the neck (thyroid) does not produce enough thyroid hormone. Hashimoto's is the most common form of this, an auto immune disorder where the body's immune system attacks the cells in the thyroid gland." 
    "supplements": ["Bugleweed", "L-Carnitine", "Glucomannan", "Royal Jelly"] 
  },
  {
  "id": 65,
    "name": "Infertility, Male",
    "definition": "A man may have a difficult time getting a woman pregnant if he has no sperm at all, if he has a low sperm count, or if he has unhealthy sperm. These might include sperm that move too slowly or have abnormal shapes. \n\nThere are many potential causes for male infertility - too many to list here. Most of the time physicians are unable to find a cause. \n\nCauses of male infertility can mostly be divided into four areas:\n\nEndocrine or systemic disorders (congenital or acquired)\n\nGenetic disorders that effect the Y chromosome \n\nDevelopmental sperm transport disorders\n\nIdiopathic"
    "supplements": ["Antioxidants", "Astaxanthin", "Carnitine", "Coenzyme Q10 (CoQ10)", "Lycopene", "Maca (Lepidium meyenii)", "Panax Ginseng", "Selenium", "Vitamin B12", "Vitamin C", "Vitamin E", "Zinc Plus Folate"] 
   },
  {
  "id": 66,
    "name": "Infertility, Female",
    "definition": "Female infertility can be categorized into the following groups:\n\nProblems with ovulation, where it does not happen on a regular basis or at all\n_Problems with the uterus or fallopian tubes such as buildup of scar tissue due to past surgery\n\nEndometriosis\n_Older age"
    "supplements": ["Ashwagandha", "Bee Propolis", "Beta-Carotene", "Black Cohosh", "Calcium", "Chasteberry", "False Unicorn", "Maca (Lepidium meyenii)", "Multivitamin Supplement", "N-Acetylcysteine (NAC)", "Vitamin C", "Vitamin D", "Reducing_Stress"] 
   },
  {
  "id": 67,
    "name": "Induction of Labor",
    "definition": ""
    "supplements": ["Castor Oil"] 
   },
  {
  "id": 68,
    "name": "Insomnia",
    "definition": "Characteristics of insomnia:\n\nDifficulty initiating sleep\n\nDifficulty maintaining sleep\n\nWaking too early\n\nImpaired daytime function due to poor quality of sleep"
    "supplements": ["Melatonin", "Valerian", "5-Hydroxytryptophan (5-HTP)", "Astragalus", "Chamomile", "GABA", "He Shou Wu", "Hops", "Kava", "Lady's Slipper Orchid", "Magnesium", "Passionflower", "Probiotics", "St. John's Wort", "Skullcap"] 
   },
  {
  "id": 69,
    "name": "Irritable Bowel Syndrome",
    "definition": "IBS\n\nIrritable bowel syndrome (IBS) is a gastrointestinal disorder characterized by chronic abdominal pain and altered bowel habits in the absence of any organic cause. \n\nResearch data has been conflicting in regard to cause of the disorder or abnormality of the digestive tract. The following causes are currently being investigated:\n\nDisfunction of normal peristaltic motion of the intestine, generally referred to as gastrointestinal motility\n\nHypersensitivity in the gut involving the receptors in the GI tract which transmit signals to the brain, in response to bowel distention or bloating.\n\nIntestinal inflammation\n\nImmune system activation, present in response to an infection\n\nAntibiotic use\n\nAlteration in fecal microflora or bacterial overgrowth\n\nFood sensitivity or food allergy (including gluten)\n\nCarbohydrate malabsorption (including fructose)\n\nGenetics\n\nPsychological stress"
     "supplements": ["Flaxseed", "Peppermint Oil", "Probiotics", "Coleus forskohlii", "Digestive Enzymes (Including Bromelain and Other Proteolytic Enzymes)", "Fructo-oligosaccharides", "Glutamine", "Melatonin", "Slippery Elm", "Avoidance of Allergenic Foods"]
   },
  {
  "id": 70,
    "name": "Kidney Stones",
    "definition": "Kidney Stones (Nephrolithiasis)\n\nDietary risks for calcium oxalate stones:\nLow calcium intake\nHigh oxalate intake\nHigh animal protein intake\nHigh sodium intake\nLow fluid intake\nHigh vitamin C intake\n\nIt should be noted that the above can not only come directly from foods but can be created indirectly (For example, oxalate can form from the breakdown of amino acids).\n\nAn excess of calcium oxalate can also occur in individuals who have had gastric bypass, bariatric surgery, or who have short bowel syndrome.\n\nKidney stones form less commonly by the occurrence of frequent urinary tract infections and by overuse of medications such as indinavir, acyclovir, sulfadiazine, ceftriaxone and triamterene.\n\nHypertension, diabetes, gout, obesity, and excessive physical exercise.\n\nUric Acid Stones are caused by persistently acidic urine. This is seen in chronic diarrheal states in which bicarbonate loss lead to concentrate acid urine. Other metabolic defects, such as gout, may cause increased uric acid excretion.\n\nStruvite Stones form in patients with an upper urinary tract infection due to a urease-producing organism such as Proteus or Klebsiella. These stones are associated with alkaline urine."
    "supplements": ["Citrate", "Goldenrod (and Other Diuretic Herbs, such as Buchu, Cleavers, Dandelion, Juniper, Parsley, Horsetail, and Rosemary)", "Aloe Vera", "Omega-3 Fatty Acids (Fish Oil)", "Gamma-Linolenic Acid (GLA)", "Magnesium", "Pumpkin Seeds", "Rose Hips", "Vitamin B6"]
   },
  {
  "id": 71,
    "name": "Lupus",
    "definition": "Lupus is also referred to as Systemic Lupus Erythematosus (SLE)\n\nIn Lupus, there is a malfunction of the immune system where it attacks healthy cells. This causes inflammation which can effect many organs of the body. People with this disorder experience periods of remission and relapse."
    "supplements": ["Dehydroepiandrosterone (DHEA)", "Beta-Carotene", "Cordyceps", "Omega-3 Fatty Acids (Fish Oil)", "Flaxseed", "Food Allergen Identification and Avoidance", "Magnesium", "Pantothenic Acid", "Selenium", "Vitamin B3 (Niacin)", "Vitamin B12", "Vitamin E"] 
   },
  {
  "id": 72,
    "name": "Lymphedema (Due to leaky blood vessels in non-life threatening conditions)",
    "definition": "Lymph is made up of interstitial fluid (the fluid between cells) that is collected through lymph capillaries. The lymphatic system is a low pressure system that circulates lymph through the entire body, serving as a key part of the immune system by filtering harmful material such as bacteria and cancer cells through the lymph nodes. The lymph nodes contain immune cells whose purpose is to destroy whatever harmful material is picked up by the lymphatic vessels.\n\nLymphedema occurs when the lymphatic load exceeds the transport capacity of the lymphatic system, which causes filtered fluid to accumulate in certain parts of the body like the feet and legs or arms and hands.\n\nLymphedema can be genetic, or it can be caused or influenced by the following:\n\nOlder age\n\nObesity\n\nAutoimmune diseases\n\nInflammatory conditions such as rheumatoid arthritis\n\nBlockage due to cancerous tumor cells\n\nRemoval of lymph nodes (such as in the case of breast cancer)\n\nLymphatic obstruction caused by parasites (more common in tropical areas) or bacterial infections"
    "supplements": ["Bilberry", "Citrus Bioflavonoids", "Oligomeric Proanthocyanidin Complexes (OPCs)", "Oxerutins"] 
   },
  {
  "id": 73,
    "name": "Macular Degenerataion",
    "definition": "Macular degeneration is an age-related degenerative disease of the macula. The macula is the central portion of the eye, responsible for central vision. Central vision is required for basic vision.\n\nMacular degeneration is a genetic condition."
    "supplements": ["Zinc with or without Antioxidants", "Carotenoids (Such as Lutein and Zeaxanthin)", "Bilberry", "Ginkgo biloba", "Wine", "Low-Glycemic Index Diet", "Oligomeric Proanthocyanidins (OPCs)", "Smoking Cessation"] 
   },
  {
  "id": 74,
    "name": "Memory and Mental Function",
    "definition": "It is normal for adults to experience a slight decline in short and long term memory with age. \n\n\nIf this decline becomes more significant, it is referred to as Mild Cognitive Impairment (MCI). MCI can progress to Dementia, a group of disorders that significantly effect daily life."
    "supplements": ["Bacopa monniera", "Ginkgo biloba", "Ginseng", "Phosphatidylserine", "Carnitine", "Cranberry", "Creatine", "Dehydroepiandrosterone (DHEA)", "Omega-3 Fatty Acids (Fish Oil)", "Folate", "Guarana", "Huperzine A", "Isoflavones", "Lobelia", "Muira Puama", "Multivitamin + Multimineral Supplement", "NADH", "Neuropeptides", "Rhodiola rosea", "Ribose", "Rosemary", "Saffron", "Spanish Sage", "Tyrosine", "Vinpocetine", "Whey protein", "Vitamin B1", "Vitamin B12", "Vitamin E", "Zinc"]
   },
  {
  "id": 75,
    "name": "Menopause",
    "definition": "Menopause is defined as the time in a woman's life, usually between age 45 and 55 years, when the ovaries stop producing eggs (ovulating) and menstrual periods end. This process occurs over a number of years. After menopause, a woman can no longer get pregnant. During this process, the ovaries begin to decrease the amount of hormones they produce. This fluctuation causes many of the symptoms associated with menopause such as hot flashes, vaginal dryness, trouble sleeping, and mood changes."
    "supplements": ["Black Cohosh", "Soy Isoflavones", "Alfalfa", "Chasteberry", "Damiana", "Dehydroepiandrosterone (DHEA)", "Dong Quai", "Estriol", "Evening Primrose Oil", "Flaxseed", "Gamma Oryzanol", "Ginseng", "Grass Pollen", "Licorice", "Lignans", "Oligomeric Proanthocyanidins (OPCs)", "Pueraria mirifica", "Progesterone Cream", "Red Clover", "Rhubarb", "Royal Jelly", "St. John's wort", "Suma", "Vitamin C", "Vitamin E", "Wild Yam"]
   },
  {
  "id": 76,
    "name": "Menstrual Cramps",
    "definition": "Menstrual cramps (Dysmenorrhea) occurs as a normal part of menses, or it can occur due to a disorder such as endometriosis, adenomyosis, or uterine fibroids.\n\nProstaglandins are chemicals that are formed in the lining of the uterus during menstruation. These prostaglandins cause muscle contractions in the uterus, which cause pain and decrease blood flow and oxygen to the uterus. Similar to labor pains, these contractions can cause significant pain and discomfort."
    "supplements": ["Omega-3 Fatty Acids (Fish Oil)", "Magnesium", "Vitamin E", "Black Cohosh", "Boswellia", "Bromelain", "Calcium", "Coleus forskohlii", "Cramp Bark", "Dong Quai", "Fennel", "Guava Leaf", "Krill Oil", "Manganese", "Traditional Chinese Herbal Medicine", "Curcumin (Turmeric)", "White Willow"]
   },
  {
  "id": 77,
    "name": "Migraine",
    "definition": "Migraines are characterized by severe headache, generally associated with nausea and/or light and sound sensitivity.\n\nThe cause of migraines has not been established. The current state of knowledge suggests that a primary neuronal dysfunction leads to a sequence of changes intracranially and extracranially to produce migraines. This differs from the previous theory that migraines involve dilation and constriction of blood vessels."
    "supplements": ["5-Hydroxytryptophan (5-HTP)", "Butterbur", "Feverfew", "Ginger", "Magnesium", "Coenzyme Q10 (CoQ10)", "Omega-3 Fatty Acids (Fish Oil)", "Food Allergen Avoidance", "Alpha-Lipoic Acid (ALA)", "Melatonin", "Vitamin B2 (Riboflavin")]
   },
  {
  "id": 78,
    "name": "Morning Sickness, Severe",
    "definition": "The cause of nausea and vomiting of pregnancy is unknown. Symptoms usually resolve by mid-pregnancy. There are a few predominant theories as to cause. These include:\n\nHormonal Changes\n\nGastrointestinal abnormalities such as delayed or dysrhythmic gastric motility, reflux, or infection with H. pylori.\n\nNutrient deficiencies\n\nAlterations in lipid levels\n\nAutonomic nervous system changes\n\nGenetics"
     "supplements": ["Ginger", "Vitamin B6", "Red Raspberry", "Vitamin C", "Vitamin K", "Multivitamin + Folic Acid"]
   },
  {
  "id": 79,
    "name": "Mountain Sickness (Altitude)",
    "definition": "Acute Mountain Sickness (AMS) occurs due to high altitude where low partial pressure of oxygen is experienced.\n\nIt can be very serious, especially if it develops into High Altitude Cerebral Edema (HACE) or High Altitude Pulmonary Edema (HAPE), which can be fatal.\n\nThe supplements listed here should be used only in a preventative manner."
     "supplements": ["Antioxidants (Vitamin C, E and Alpha-Lipoic Acid)", "Glutamine", "Magnesium", "Milk Thistle", "Rhodiola rosea", "High-Carbohydrate Diet"]
  },
  {
  "id": 80,
    "name": "Multiple Sclerosis",
    "definition": "Multiple Sclerosis (MS) is an immune-mediated inflammatory demyelinating disease of the central nervous system. \n\nAbnormal activation of the immune system is generally accepted as involved in beginning the disease. MS is then characterized by autoreactive lymphocytes (immune cells). Later, the disease is dominated by microglial (immune cells in the brain and spinal cord) activation and chronic neurodegeneration. This theory is still not completely understood, and direct proof of autoimmune cause is lacking.\n\nResearch suggests the following may have a causal relationship with MS:\n\nGenetics, with a possible epigenetic component\n\nViral infections\n\nGeographic latitude and place of birth\n\nSunlight exposure and Vitamin D levels"
    "supplements": ["Bee Venom", "Evening Primrose Oil", "Omega-3 Fatty Acids (Fish Oil)", "Ginkgo biloba", "Linoleic Acid", "Phenylalanine", "L-Threonine", "Vitamin B12", "Vitamin D"] 
   },
  {
  "id": 81,
    "name": "Nicotine Addiction",
    "definition": "Smoking cessation is associated with substantial health benefits, including a reduced risk of coronary heart disease, cancer, pulmonary disease, infections, and hip fracture. Smokers also benefit from quitting smoking even after the development of smoking-related diseases, such as coronary heart disease or COPD."
    "supplements": ["Alfalfa", "Cysticine (toxic)", "Eucalyptus", "Gotu Kola", "Hops", "Licorice", "Lobelia", "Melatonin", "Passionflower", "Skullcap", "Wild Oats (Avena sativa)"]
   },
  {
  "id": 82,
    "name": "Night Vision (Impaired)",
    "definition": "The cause of impaired night vision is not completely understood in many circumstances. The following are known causes of poor night vision:\n\nRetinitis pigmentosa (RP) is a group of inherited diseases that damage the light-sensitive rods and cones in the retina, the back part of our eyes. The rods, which provide side (peripheral) and night vision, are affected more than the cones, which provide color and clear central vision.\n\nThe first symptom of Cataracts is often impaired night vision.\n\nDiabetes increases the risk of night vision impairment. Over years, high blood sugar levels damage the blood vessels and nerves in the eyes."
    "supplements": ["Bilberry", "Black Currant", "Oligomeric Proanthocyanidins (OPCs)", "Vitamin A", "Zinc", "Lutine"] 
   },
  {
  "id": 83,
    "name": "Obsessive-Compulsive Disorder",
    "definition": "Obsessive-compulsive disorder (OCD) is characterized by recurrent intrusive thoughts, images, or urges (obsessions) that typically cause anxiety or distress, and by repetitive mental or behavioral acts (compulsions) that the individual feels driven to perform, either in response to an obsession or according to rules that he or she believes must be applied rigidly.\n\nCurrent research indicates that OCD is caused by both genetic and environmental factors. \n\nThe focus of most research is related to neurological activity in the brain. The most consistent research implicates abnormalities in cortico-striato-thalamo-cortical (CSTC) circuits.\n\nSeveral environmental factors have been implicated in OCD, but causal associations have not been established.\n\nOne hypothesis is that OCD symptoms can arise from an autoimmune reaction that causes damage in the brain, caused by group A streptococcal infection. This syndrome occurs in children and is referred to as pediatric autoimmune neuropsychiatric disorder\n(PANDAS). Researchers are also exploring the possibility that other infectious agents may trigger a similar acute neuropsychiatric syndrome.\n\nPossible causes or triggers may be:\n\nHormone fluctuations\n\nTraumatic events or stress\n\nNeurological lesions (eg, ischemic stroke, traumatic brain injury) that affect CSTC circuits \n\nAbnormalities in serotonergic, glutamatergic and/or dopamine signaling"
    "supplements": ["Inositol", "St. Johns Wort", "5-Hydroxytryptophan (5-HTP)"]
   },
  {
  "id": 84,
    "name": "Osteoporosis",
    "definition": "Osteoporosis is a skeletal disorder characterized by compromised bone strength predisposing to an increased risk of fractures. Although osteoporosis has become synonymous with decreased bone mineral density (BMD), this feature is not always present. Small bone size, unfavorable macro-architecture, disrupted micro-architecture, cortical porosity (% empty space within bone), compromised quality of the material, and decreased viability of osteocytes (former osteoblasts [bone-making cells] buried within mineralized bone that sense and respond to changes in mechanical forces) are some of the other factors contributing to decreased strength. \n\nMultiple mechanisms can cause osteoporosis. Low peak bone mass (accrued over the first approximately 30 years of life) probably contributes to the development of osteoporosis later in life. However, old age, sex steroid deficiency, lipid oxidation ( free radicals steal electrons from the lipids in cell membranes, resulting in cell damage), decreased physical activity, use of glucocorticoids (many anti-inflammatory drugs), and a propensity to fall are the most critical determinants of increased fracture risk. \n\nThe prevailing pathogenetic factor most likely varies from one individual to the other and may, in the same individual, change over time."
    "supplements": ["Calcium and Vitamin D", "Genistein and Other Isoflavones", "Ipriflavone", "Strontium", "Vitamin K", "Black Cohosh", "Black Tea", "Boron", "Dehydroepiandrosterone (DHEA)", "Epimedium brevicornum", "Estriol", "Omega-3 Fatty Acids (Fish Oil)", "Gamma-Linolenic Acid (GLA)", "Magnesium", "Manganese", "Phosphorus", "Progesterone", "Royal Jelly", "Silicon", "Trace Minerals", "Reducing High Homocysteine with Folate and Vitamin B12"] 
  },
  {
  "id": 85,
    "name": "Pancreatitis",
    "definition": "The pancreas is an organ that is comprised of two glands that produce digestive enzymes and hormones that regulate blood sugar.\n\nChronic pancreatitis occurs when the pancreas becomes damaged by long-standing inflammation. Inflammation changes the pancreas' ability to function normally. People with chronic pancreatitis require ongoing medical care to minimize their symptoms, slow the damage to the pancreas, and address any complications that arise. In most cases, treatment controls but does not cure the underlying problem.\n\n\nCommon causes of chronic pancreatitis:\n\nAlcohol abuse (the most common cause)\n\nGenetics\n\nBlockage of the pancreatic duct (eg, from trauma, stones, tumors)\n\nOther diseases, such as lupus\n\nCystic fibrosis or mutations of the cystic fibrosis gene"
    "supplements": ["Antioxidants", "Digestive Enzymes", "Multivitamin + Multimineral Supplement", "Grapeseed Extract (a source of OPCs)", "Alpha-Lipoic Acid (ALA)", "Methionine", "Milk Thistle", "Selenium", "Vitamin C", "Vitamin E"] 
   },
  {
  "id": 86,
    "name": "PCOS",
    "definition": "In Polycystic Ovary Syndrome (PCOS), the ovaries develop benign cysts which cause hormonal imbalance. This hormonal imbalance causes menstrual and ovulation irregularity, problems with fertility, androgen excess (causes acne, scalp hair loss, and excessive facial and body hair), and metabolic dysfunction (causes increased blood pressure, high blood sugar, excess body fat around the waist, and abnormal cholesterol or triglyceride levels).\n\nPCOS is a complex genetic trait whose development is likely influenced to some degree by environmental factors (eg, diet and the development of obesity) and more significantly by a number of different genetic variants."
    "supplements": ["Inositol", "N-Acetylcysteine (NAC)", "B Vitamins", "Chromium", "Cinnamon", "Green Tea", "Spearmint Tea"] 
   },
  {
  "id": 87,
    "name": "Peptic Ulcer",
    "definition": "Peptic ulcers occur when the normal mechanisms in the stomach are disrupted by processes such as Helicobacter pylori infection and the ingestion of nonsteroidal anti-inflammatory drugs (NSAIDs). \n\nNSAIDs, via inhibition of prostaglandin synthesis, affect the amount of gastric acid generated, the integrity of the stomachÍs mucosal barrier, the amount of bicarbonate and glutathione generated, and the rate of mucosal blood flow."
     "supplements": ["Probiotics (adjunct to standard therapy)", "Aloe Vera", "Bacopa monniera", "Beeswax Extract", "Butterbur", "Colostrum", "Cranberry", "Deglycyrrhizinated Licorice (DGL)", "Omega-3 Fatty Acids (Fish Oil)", "Garlic", "Rhubarb", "Sea Buckthorn Oil", "Vitamin C", "Vitamin E"]
   },
  {
  "id": 88,
    "name": "Periodontal Disease",
    "definition": "Periodontal, or gum disease is a common condition affecting the tissues that comprise the dental supporting structure: gingiva, cementum, periodontal ligament, and the alveolar bone. Gingivitis progresses to periodontal disease, which involves the alveolar bone. \n\nPeriodontal disease may be a risk factor for a number of conditions, including cardiovascular and pulmonary diseases, and pregnancies resulting in low birth weight.\n\nCausal factors for periodontal disease are:\n\nPlaque\n\nHormonal shifts (pregnancy)\n\nSystemic factors (hormonal, HIV)\n\nMedications (antihypertensives, immunosuppressors)\n\nMalnutrition (vitamin C deficiency)\n\nPeriodontal, or gum disease is a common condition affecting the tissues that comprise the dental supporting structure: gingiva, cementum, periodontal ligament, and the alveolar bone. Gingivitis progresses to periodontal disease, which involves the alveolar bone. \n\nPeriodontal disease may be a risk factor for a number of conditions, including cardiovascular and pulmonary diseases, and pregnancies resulting in low birth weight.\n\nCausal factors for periodontal disease are:\n\nPlaque\n\nHormonal shifts (pregnancy)\n\nSystemic factors (hormonal, HIV)\n\nMedications (antihypertensives, immunosuppressors)\n\nMalnutrition (vitamin C deficiency)"
     "supplements": ["Beta-Glucan", "Bloodroot", "Calcium", "Caraway", "Coenzyme Q10 (CoQ10)", "Cranberry Juice", "Essential Oil Mouthwash", "Eucalyptus", "E. linza (Green Algae) Extract Mouthwash", "Folate Mouthwash", "Gamma-Linolenic Acid (GLA)", "Green Tea Chew Candy", "Herbal Mouthwash Containing Chamomile", "Echinacea", "Hops", "Myrrh", "Mint", "Sage and Ratanhia", "Honey Leather", "Lycopene", "Magnesium", "Mangosteen", "Macleaya cordata (Plume Poppy) and Prunella vulgaris", "Oligomeric Proanthocyanidins (OPCs)", "Bee Propolis", "Sea Cucumber", "Tea Tree Oil", "Vitamin B12", "Vitamin C", "Witch Hazel", "Xylitol", "Zinc"]
  },
  {
  "id": 89,
    "name": "Peyronie's Disease",
    "definition": "Peyronie's disease (PD) is an acquired, localized fibrotic disorder of the tunica albuginea resulting in penile deformity, mass, pain, and in some men, erectile dysfunction (ED). \n\nThe tunica albuginea is the fibrous tissue that surrounds the pair of sponge-like regions of erectile tissue in the penis, which contain most of the blood in the penis during an erection.  \n\nThis tissue consists of approximately 5% elastin, an extensible tissue that is primarily made up of the amino acids glycine, valine, alanine, and proline. The majority of the remaining tissue is collagen, which is made up of lysine, proline, glycine, alanine, and other amino acids.\n\nThe cause of peyronieÍs disease is likely multifactorial with an interplay between genetic predisposition, trauma, and tissue ischemia (restriction of blood supply). It is thought be due to a localized aberrationof the wound healing process. \n\nA PD lesion is a fibrous plaque or plaques, containing excess collagen, that alters the penile anatomy. These plaques can range from having areas of calcification to complete ossification (remodeled bone material)."
    "supplements": ["Acetyl-L-Carnitine", "Para-Aminobenzoic Acid (PABA)", "Gotu Kola", "Vitamin E"] 
   },
  {
  "id": 90,
    "name": "Pre-eclampsia",
    "definition": "Pre-eclampsia is a pregnancy complication characterized by high blood pressure and signs of damage to another organ system, often the kidneys.\n\nThis is a serious condition which requires diagnosis and intervention by a physician. The nutrients and supplements listed here are for prevention, not treatment."
    "supplements": ["Calcium", "Arginine", "Coenzyme Q10 (CoQ10)", "Evening Primrose Oil", "Folate", "Lycopene", "Magnesium", "N-Acetylcysteine (NAC)", "Omega-3 Fatty Acids (Fish Oil)", "Vitamin C and Vitamin E in Combination", "Zinc"] 
   },
  {
  "id": 91,
    "name": "Premenstrual Syndrome (PMS)",
    "definition": "Premenstrual syndrome (PMS) and the more severe variant of premenstrual dysphoric disorder (PMDD),  are characterized by symptoms such as abdominal cramping and bloating, breast tenderness, headaches, fatigue, irritability, emotional lability and anxiety.\n\nThese symptoms typically occur repetitively in the second half of the menstrual cycle and often the first few days of menses. \n\nThe symptoms of PMS or PMDD are severe enough that they interfere with a womanÍs everyday life.\n\nTheorized causes of PMS and PMDD focus on a womanÍs sensitivity to changes in hormone levels. At the present time, evidence is most supportive for marked changes in the opioid, GABA and serotonin systems, caused by cyclic fluctuations in circulating estrogen and progesterone."
    "supplements": ["Calcium,Chasteberry", "Omega-3 Fatty Acids (Fish Oil)", "Ginkgo biloba", "Gamma-Linolenic Acid (GLA)", "Grass Pollen", "Inositol", "Omega-3 Fatty Acids (Fish Oil)", "Magnesium", "Multivitamin + Mineral Supplement", "Oligomeric Proanthocyanidins (OPCs)", "Progesterone Cream", "Soy Isoflavones", "Vitamin E"] 
  },
  {
  "id": 92,
    "name": "Psoriasis",
    "definition": "Psoriasis is a complex autoimmune inflammatory disease that occurs in genetically susceptible individuals and presents with the development of inflammatory plaques on the skin. Dysregulation of the immune system is currently recognized as a critical event in this disease.\n\nMedications, trauma, alcohol, cigarette smoking, stress, and infections have all been linked to the onset of autoimmune inflammatory conditions and are also known to trigger psoriasis."
    "supplements": ["Oregon Grape", "Aloe Vera (Topical)", "Capsaicin (Topical)", "Cetylated Fatty Acids", "Omega-3 Fatty Acids (Fish Oil)", "Folate (to Reduce Side Effects of Methotrexate)", "Fumaric Acid", "Seal Oil"] 
   },
  {
  "id": 93,
    "name": "Restless Legs Syndrome",
    "definition": "If you have restless legs syndrome, you know what it is and you know you have it. ItÍs a difficult to explain uncomfortable sensation in the legs, usually experienced while falling asleep or during sleep. \n\nThe underlying cause of restless legs syndrome remains poorly understood, although studies have identified a variety of both central and peripheral nervous system abnormalities in patients with the disorder. \n\nThe most consistently implicated central nervous system alteration in patients with RLS is reduced central iron stores; dopaminergic systems, circadian physiology, thalamic function, and other neurotransmitters such as glutamate and gamma-aminobutyric acid (GABA)."
    "supplements": ["Folate", "Iron", "Magnesium", "Vitamin B12", "Vitamin C", "Vitamin E"] 
   },
  {
  "id": 94,
    "name": "Rosacea",
    "definition": "Rosacea is a common, chronic skin disorder that presents with a variety of clinical manifestations primarily localized on the central face. \n\nProposed contributing factors include abnormalities in innate immunity, inflammatory reactions to cutaneous microorganisms, ultraviolet damage, and vascular dysfunction.\n\nProposed contributing factors: \n\nAbnormalities in innate immunity \n\nInflammatory reactions to cutaneous microorganisms (the following microorganisms have been studied and their involvement is backed by numerous scientific studies, however it is still uncertain if they have a significant impact on development of rosacea) - \n\n„Demodex\n\n„Bacillus olenoriumæ\n\n„Other: Staphylococcus epidermidis,Chlamydia pneumoniae, and small intestine bacteria\n\nUltraviolet Damage - sun exposure\n\nVascular Dysfunction - chronic flushing due to things like spicy foods, alcohol, and extremes of temperature"
    "supplements": ["Aloe Vera", "Apple Cider Vinegar", "Betaine Hydrochloride", "Burdock", "Chamomile", "Digestive Enzymes", "Green Tea (Topical)", "Methylsulfonylmethane (Topical)", "Milk Thistle (Topical)", "Niacinamide (Topical)", "Red Clover", "Rose Hips", "Selenium", "Vitamin B-Complex", "Vitamin C", "Vitamin D", "Vitamin E", "Yellow Dock", "Zinc", "Food Allergen Avoidance"] 
  },
  {
  "id": 95,
    "name": "Seasonal Affective Disorder",
    "definition": "The term seasonal affective disorder (SAD) describes episodes of major depression, mania, or hypomania that regularly occur during particular seasons. The most prevalent form of SAD is winter depression, marked by recurrent episodes of unipolar depression that begin in the fall or winter and, if left untreated, generally remit in the following spring or summer. There is also SAD which starts in spring and lasts through summer. Recognizing the disorder is important because SAD is common and associated with psychosocial impairment. In addition, acute treatment is often effective and maintenance treatment can prevent future episodes [3]. Among patients who were recruited for randomized trials studying treatment of winter depression, nearly 60 percent had never been treated for depression [4].\n\nIt is not considered a separate mood disorder; rather, SAD is a subtype of the following mood disorders:\n\nUnipolar major depression (major depressive disorder)\n\nBipolar I disorder\n\nBipolar II disorder\n\nThe pathogenesis of seasonal affective disorder (SAD) is not known; the primary hypotheses involve disturbances of circadian rhythms, decreased sensitivity of the retina, genetic factors, and dysregulation of neurotransmitters. These hypotheses are not mutually exclusive."
     "supplements": ["Melatonin", "Negative Ions", "St. Johns Wort", "Vitamin B12", "Vitamin D"]
   },
  {
  "id": 96,
    "name": "Scar Tissue",
    "definition": "Scars are areas of fibrous tissue that replace normal body tissue. A scar results from the biological process of wound repair in the skin and other tissues of the body. Thus, scarring is a natural part of the wound healing process. \n\nScar tissue is composed of the same protein (collagen) as the tissue that it replaces, but the fiber composition of the protein is different; instead of a random basketweave formation of the collagen fibers found in normal tissue, in fibrosis the collagen cross-links and forms a pronounced alignment in a single direction."
    "supplements": ["Allantoin", "Aloe Vera", "Coconut Oil", "Collagen", "Gotu Kola", "Jojoba Oil", "Lavender Oil", "Selenium", "Snail Extract", "Tamanu Oil", "Vitamin A", "Vitamin C", "Vitamin E", "Zinc", "Bromelain", "Papain"] 
   },
  {
  "id": 97,
    "name": "Schizophrenia",
    "definition": "Schizophrenia is a chronic, severe, and disabling brain disease. People with schizophrenia often suffer terrifying symptoms such as hearing internal voices not heard by others, or believing that other people are reading their minds, controlling their thoughts, or plotting to harm them. They often suffer hallucinations or delusions; disorganized speech; a flat affect or poverty of speech; and impairments in cognition, including attention, memory, and executive functions. \n\nAvailable treatments can relieve many symptoms, but most people with schizophrenia continue to suffer some symptoms throughout their lives; it has been estimated that no more than one in five individuals recovers completely.\n\nSchizophrenia appears to be a uniquely human condition, which limits the utility of animal models. There is little doubt that schizophrenia proceeds from a complex interaction between genes and the environment, but even the attempt to differentiate genetic from environmental risk factors may be artificial, since environmental factors can influence gene expression just as a personÍs genetic make-up can influence response to environmental stressors.\n\nThere are several proposed causes of schizophrenia, which may act through disrupted neurotransmitter system function.\n\nGenetic association has been established in schizophrenia. A list of certain obstetrical complications have been identified as having an association with schizophrenia, such as hemorrhage, preterm labor, blood-group incompatibilities, fetal hypoxia, excessive prenatal stress, and maternal infection.\n\nNumerous epidemiological studies have found a rise in schizophrenia prevalence in cohorts born during influenza epidemics.\n\nThe certain infections and the presence of specific antibodies for different infections have been studied and have proven to impact a higher rate of schizophrenia in the unborn child. \n\nChildhood illnesses leading to hospitalization also prove to cause a higher rate of schizophrenia.\n\nEpidemiological studies suggest that cannabis use is a risk factor for the development of psychosis.\n\nAn interesting finding: Increased rates of schizophrenia as high as 4-fold have been reported in people who have immigrated from one country to another. The relation of this to the disease is currently being studied, with a few theories such as overdiagnosis and stress.\n\nAutoimmune disorders that have been associated with a higher prevalence of schizophrenia include acquired hemolytic anemia, bullous pemphigoid, celiac disease, interstitial cystitis and thyrotoxicosis.\n(A notable exception is rheumatoid arthritis, in which schizophrenia rates are lower than expected based on rates in the general population. People with schizophrenia are also more likely to have circulating antibodies to proteins common in most Western diets, such as gluten and casein.)\n\nClinical trials of anti-inflammatory agents for psychosis have been incited, in part, by these findings.\n\nInflammation in people with schizophrenia may also be responsible for some of the disorderÍs associated conditions such as heart disease (through decreased elasticity of inflamed blood vessels) and diabetes.\n\nTreating excess dopamine in the mesolimbic tract (reward pathway in the brain) has proved partially successful.\n\nEvidence suggests that there is dysfunction in glutamine (major CNS excitatory neurotransmitter) and gamma-amino-butyric acid (GABA) (major CNS inhibitory neurotransmitter) neurotransmission in patients with schizophrenia. Acetylcholine may also be involved, however acetylcholine influences the action of many other neurotransmitters, so its involvement is difficult to nail down."
    "supplements": ["Glycine", "Coenzyme Q10 (CoQ10)", "Creatine", "D-Serine", "Dehydroepiandrosterone (DHEA)", "Eicosapentaenoic Acid (EPA)", "Folate", "Omega-3 Fatty Acids (Fish Oil)", "Ginkgo biloba", "Melatonin", "Vitamin B3 (Niacin)", "Vitamin C"]
   },
  {
  "id": 98,
    "name": "Scleroderma",
    "definition": "There are 2 main types of scleroderma. \"Localized\" scleroderma affects the skin and tissue just under the skin. \"Systemic\" scleroderma can affect the skin and organs inside the body, including the heart, lungs, kidneys, and the digestive system.\n\nMost hypotheses of the cause of scleroderma focus on the interplay between early immunological events and dysfunction on the molecular level within the vascular system (blood vessels) and connective tissue."
    "supplements": ["Beta-Carotene", "Boswellia", "Danshen Root", "Gotu Kola", "Methyl Sulfonyl Methane (MSM)", "Para-Aminobenzoic Acid (PABA)", "Selenium", "Thymus Extract", "Vitamin C", "Vitamin E"]
   },
  {
  "id": 99,
    "name": "Sexual Dysfunction in Women",
    "definition": "Female sexual dysfunction takes different forms, including lack of sexual desire, impaired arousal, inability to achieve orgasm, or pain with sexual activity.\n\nThe primary reason for sexual dysfunction in women is lowering estrogen levels in peri- and postmenopausal women. Hypoestrogenization results in less vaginal lubrication, vascular congestion during sexual arousal, and what is referred to as ñvaginal atrophyî, which includes changes to the labia, vagina, urethra, and bladder, resulting in the possibility of genital dryness, burning, and irritation; diminished lubrication and pain; and urinary symptoms of urgency, dysuria, and recurrent urinary tract infections. \n\nDeclining levels of estradiol were associated with decreases in libido and sexual response. \n\nAdrenal insufficiency can cause sexual dysfunction. There is opposing research regarding whether DHEA supplementation is helpful for this in adrenal insufficiency.\n\nThere is also conflicting research on the role of testosterone in women with lowered sexual desire.\n\nRisk factors for sexual dysfunction include anxiety, conflict within the relationship, fatigue, stress, lack of privacy, issues relating to prior physical or sexual abuse, medications, or physical problems that make sexual activity uncomfortable such as endometriosis or genitourinary syndrome of menopause.\n\nSimilarly, research has shown that the presence of any serious medical condition is likely to impair sexual function due not only to the condition itself, but also to associated impact on psychological well-being."
    "supplements": ["Dehydroepiandrosterone (DHEA)", "Diindolylmethane (DIM)", "Horny Goat Weed", "Maca (Lepidium meyenii)", "Molybdenum,Rhodiola rosea", "Vitamin C"]
  },
  {
  "id": 100,
    "name": "Shingles (Herpes Zoster)",
    "definition": "Varicella-zoster virus (VZV) infection causes two clinically distinct forms of disease: varicella (chickenpox) and herpes zoster (shingles). Primary VZV infection results in chickenpox.\nThe virus then becomes a latent infection that reactivates later in life as herpes zoster, or shingles.\n\nAge is the most important risk factor for shingles. A dramatic increase in disease rates begins to occur after 50 years of age. The next risk factors include recent physical trauma, underlying malignancy, disorders of cell-mediated immunity, and chronic lung or kidney disease."
     "supplements": ["Capsaicin", "Proteolytic Enzymes", "Adenosine Monophosphate (AMP)", "Vitamin B12", "Vitamin E"]
   },
  {
  "id": 101,
    "name": "Sickle Cell Disease",
    "definition": "The red blood cells carry oxygen to organs in the body. Normal red blood cells are round. When people have sickle cell disease, some of their red blood cells can have an abnormal shape. They look like a crescent (or ñsickleî). The abnormal red blood cells get stuck in the blood vessels easily, and so they don't bring enough oxygen to the body's organs. This can cause pain or organ damage.\n\nSickle cell disease is a life-long condition that people are born with. It is caused by an abnormal gene.\n\nMost treatments for sickle cell disease are aimed at increasing levels of healthy blood cells. Other treatments are for problems sickle cell disease can cause like pain or infection."
    "supplements": ["Zinc", "Alpha-Linolenic Acid", "Beta-Carotene", "Coenzyme Q10 (CoQ10)", "Omega-3 Fatty Acids (Fish Oil)", "Folate", "Garlic", "Green Tea", "Alpha-Lipoic Acid (ALA)", "Magnesium", "Oligomeric Proanthocyanidins (OPCs)", "Suma", "Vitamin B2 (Riboflavin)", "Vitamin B6", "Vitamin B12", "Vitamin C", "Vitamin E"]
   },
  {
  "id": 102,
    "name": "Sinusitis",
    "definition": "Chronic sinusitis is a long-lasting form of sinusitis. Sinusitis is a condition that causes a stuffy nose, pain in the face, and discharge (mucus) from the nose.\n\nThe sinuses are hollow areas in the bones of the face. They have a thin lining that normally makes a small amount of mucus. When this lining gets inflamed, it swells and makes extra mucus.\n\nThe most common type of sinusitis often happens after you catch a cold. It is also called \"acute sinusitis\" and usually gets better in 1 to 3 weeks. Chronic sinusitis lasts for at least 3 months. People with this condition often have very swollen sinuses. One or more sinus might get filled with infected mucus. Some people get abnormal growths inside their noses or sinuses, called \"polyps.\"\n\nSinusitis can be caused by allergies, compromised immune system, frequent colds, cigarette smoke, and/or an injury or deformity in the nose which makes it difficult for mucous to drain normally."
    "supplements": ["Butterbur", "Sublingual Immunotherapy (SLIT)", "Bromelain", "Cineole (from Eucalyptus)", "Evening Primrose Oil", "Gentian Root", "Elderberry", "Common Sorrel", "Vervain", "Horseradish", "Nasturtium"]
   },
  {
  "id": 103,
    "name": "Sjogren's Syndrome",
    "definition": "Sj_grenÍs syndrome is a chronic, autoimmune disease in which white blood cells from the bodyÍs immune system mistakenly attacks glands that produce moisture in the eyes, the mouth, and elsewhere in the body. The disease can also effect organ systems such as skin, lung, heart, kidney and nerves.\n\nThe exact cause of sjogrenÍs syndrome is unknown. It is thought to occur when a genetically predisposed person is exposed to an environmental trigger, such as an infection."
    "supplements": ["N-Acetylcysteine (NAC)", "Aloe Vera", "Bovine Colostrum", "Citrus Bioflavonoids", "Dandelion", "Dehydroepiandrosterone (DHEA)", "Echinacea", "Omega-3 Fatty Acids (Fish Oil)", "Flaxseed Oil", "Gamma-Linolenic Acid (GLA)", "Garlic", "Inositol", "Magnesium", "Methionine", "Olive Leaf Extract", "Red Clover", "Vitamin A", "Vitamin C", "Vitamin E", "Zinc"]
  },
  {
  "id": 104,
    "name": "Skin Aging",
    "definition": "As you age, your skin undergoes gradual changes:\n\nCells divide more slowly and the inner layer of skin (the dermis) starts to thin. Fat cells beneath the dermis begin to shrink. In addition, the ability of the skin to repair itself decreases with age, so wounds heal more slowly. The thinning skin becomes prone to injuries and damage.\nThe deeper layer of the skin, which provides the support structure for the surface skin layers, loosens and unravels. Skin then loses its elasticity (ability to stretch and return to position). As a result, skin sags and forms furrows.\nGlands that secrete oil shrink (atrophy). This leaves the skin without a protective layer of oil. The skin's ability to stay moisturized decreases, becoming dry and scaly.\nFrown lines (between the eyebrows) and crow's feet (lines that spread from the corners of the eyes) develop because of repetitive muscle contractions during facial expressions.\nGravity causes skin and tissues to sag, leading to formation of jowls and drooping eyelids.\nSunlight, Ultraviolet Radiation, and Photoaging\n\nSunlight exposure is the most important cause of early aging of skin (a process called photoaging). Sunlight exposure is also the main cause of skin cancers. The two types of sun rays that can injure the skin are ultraviolet A (UVA) and ultraviolet B (UVB). Exposure to ultraviolet radiation accounts for most of the symptoms of early skin aging. Much of the damage is underway by age 20:\n\nUVA affects the deep layers of skin. Most of the ultraviolet rays that reach the earth are UVA. UVA is not as intense as UVB. UVA rays are equally intense throughout the entire day and year. UVA can pass through clouds and glass.\nUVB is the main cause of sunburns. It mostly affects the outer skin layers. UVB is most intense in the United States between 10 a.m. and 4 p.m. from April to October. Skin damage from UVB can also occur during winter, especially at high altitudes or in places with snow and ice, which reflect rays onto the skin. Window glass filters out most UVB rays.\nEven small amounts of UV radiation trigger the processes leading to skin wrinkles.\nLong-term repeated exposure to sunlight adds up. This is responsible for the problems of aging skin, including basal cell and squamous cell cancers.\nIntense exposure to sunlight in early life is an important cause of melanoma, an aggressive type of skin cancer.\nProcesses Leading to Wrinkles. Wrinkles form in the following way:\n\nSunlight damages collagen fibers. Collagen is the main protein that gives structure to the skin. Sunlight also damages elastin. This is another protein in the skin that helps it and the tissue below stay springy and strong.\nIn response to sun-induced elastin damage, the body produces large amounts of enzymes called metalloproteinases.\nSome of these enzymes break down collagen. The result is an uneven formation of disorganized collagen fibers called solar scars. Repetition of this abnormal skin rebuilding causes wrinkles.\nAn important event in this process is the over-production of oxidants, also called free radicals. Excessive amounts of oxidants damage the body's cells. They can even alter the genetic material of cells. Oxidation may lead to wrinkling by activating the specific metalloproteinases that degrade connective tissue.\nOther Factors Responsible for Wrinkles\n\nIn addition to sunlight, other factors can speed the formation of wrinkles.\n\nCigarette Smoke. Smoking produces free radicals in the body. These cause wrinkles and age-related skin problems to develop sooner. Free radicals also increase the risk of non-melanoma skin cancers. Studies suggest that smoking and resulting oxidation produce higher levels of metalloproteinases.\n\nAir Pollution. Ozone is a common air pollutant. It may reduce the body's vitamin E level. Vitamin E is an important antioxidant that protects cells against the effects of free radicals."
     "supplements": ["Alpha-hydroxy acids (AHAs)", "Antioxidants (Carotenoids)", "Green Tea", "Milk Thistle", "Oligomeric Proanthocyanidin Complexes (OPCs)", "Selenium", "Soy Isoflavones", "Vitamin C", "Vitamin E", "Aloe Vera", "Arnica", "Beta-Carotene", "Calendula", "Chamomile", "Coriander Oil", "Dehydroepiandrosterone (DHEA)", "Dead Sea Minerals", "Glucosamine", "Gotu Kola", "Niacinamide", "Para-Aminobenzoic Acid (PABA)", "Silicon", "Thuja", "Vitamin A", "Vitis vinifera"]
   },
  {
  "id": 105,
    "name": "Strep Throat",
    "definition": "Symptoms of strep throat disappear on their own, without treatment, in 3 to 5 days. The big risk comes 1 to 5 weeks later, when rheumatic fever may strike. Antibiotic treatment for strep throat is not primarily intended to treat the strep throat itself (although it does that), but rather to prevent rheumatic fever. There are no herbs or supplements known to prevent rheumatic fever. Strep throat caused by Group A beta-hemolytic streptococcus cannot be treated with alternative medicine."
    "supplements": ["Pelargonium sidoides", "Throat Coat"]
   },
  {
  "id": 106,
    "name": "Varicose Veins",
    "definition": "Varicose veins are swollen and twisted veins. Normally, the veins in the legs carry blood from the legs back to the heart. The veins have tiny valves inside them to help keep blood moving in only one direction (toward the heart). The valves open to let blood flow to the heart, and close to keep it from flowing back down the leg. Varicose veins can happen when the valves are damaged or do not work well. This causes blood to collect in the legs. Blood is especially likely to collect in the legs when a person sits or stands for a long time without walking.\n\nVaricose veins can be caused by a blood clot in a leg vein, leg injury, being pregnant more than once (causes a change in hormone levels that can weaken vein walls), or weight gain."
    "supplements": ["Butcher's Broom", "Gotu Kola", "Horse Chestnut", "Oligomeric Proanthocyanidins (OPCs)", "Bromelain", "Calendula", "Collinsonia", "Comfrey", "Mesoglycan", "Mimosa tenuiflora", "Witch Hazel (OPCs)", "Oxerutins and Other Bioflavonoids", "Red Vine Leaf"] 
   },
  {
  "id": 107,
    "name": "Weight Loss",
    "definition": "There are thousands of weight loss theories and methods to attempt to decipher these days. The purpose of this list of supplements and corresponding research is to provide the most current facts regarding what helps for weight loss."
    "supplements": ["Chromium", "Fiber", "Pyruvate", "5-Hydroxytryptophan (5-HTP)", "Calcium", "Conjugated Linoleic Adic (CLA)", "Coleus forskohlii", "Dehydroepiandrosterone (DHEA)", "Diacylglycerol", "Evening Primrose Oil", "Green Tea", "Glucomannan", "Glycyrrhetinic Acid", "Hoodia gordonii", "Hydroxycitric Acid (HCA) (Garcinia Cambogia)", "L-Carnitine", "Low-carb Diet", "Low-Glycemic Index Diet", "Medium Chain Triglycerides (MCTs)", "Spirulina", "Vitamin C", "Vitamin D"] 
   },
  {
  "id": 108,
    "name": "Yeast Infection",
    "definition": "Vaginal yeast infections are common. The fungus that causes yeast infections is called Candida. It normally lives in the gastrointestinal tract and sometimes the vagina. Normally, Candida causes no symptoms. However, when there are changes in the normal flora of the gastrointestinal tract and vagina (caused by medicines, injury, or stress to the immune system), Candida can overgrow and cause a yeast infection."
    "supplements": ["Barberry", "Betaine Hydrochloride", "Caprylic Acid", "Garlic", "Grapefruit Seed Extract", "Pau D'arco (Lapacho)", "Essential Oils", "Probiotics", "Red Thyme"] 
  }
  ]

*/




