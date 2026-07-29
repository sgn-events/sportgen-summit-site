/* SPORT[GEN] website, shared content data for all routes */
(function () {
  // Real brand assets, hotlinked from the live site's Framer CDN (sportgensummit.com export).
  const CDN = 'https://framerusercontent.com/images/';
  const heroVideo = 'assets/aftermovie-hero.mp4';
  const PH = 'assets/photos/speakers/';
  const p = (slug) => slug ? PH + slug + '.jpg' : null;

  // [name, role, org, photoFile, logoFile], real headshots + company logos from the live site
  const HOME = [
    ['Vincent-Baptiste Closon', 'Global Director Partnerships', 'BNP Paribas', 'XYiyKAI6WxTzTM5lq7VDw1lDFeE.png', 'oiwhOS68oWxY0RMuWSH4sVwCD2Q.png', 'https://www.linkedin.com/in/vincent-baptiste-closon-48a21360/'],
    ['Eno Polo', 'CEO', 'ATP Tour', 'oC8BQ5Exr5ECOmfk339aS6Tu7w.jpg', 'LvuVB5FXB8AX00VvoQVXQyCFvA0.png', 'https://www.linkedin.com/in/eno-polo-ab61371b/'],
    ['Dominic Thiem', 'Entrepreneur', 'Grand Slam Winner', 'zgSiRRf8uaS2NtEv28uhqIUrahw.jpeg', 'F4sRsiPUORsuwZ8Zz8BEtPdEI.webp', 'https://www.linkedin.com/in/dominic-thiem-03a46a291/'],
    ['Romy Gai', 'Chief Business Officer', 'FIFA', 'Tn2BKZ9BUwgeXkQxOwhAHwFjopQ.png', 'vW8YRjMjRcJWDpC9F61JBG5fo.png', 'https://www.linkedin.com/in/romy-gai-8543171a1/'],
    ['Marc Lasry', 'Co-Founder, Chairman & CEO', 'Avenue Capital', 'cYNJZ7PeuRme6ygWI2V7HJT3fU.png', 'assets/logos/avenue-capital-white.png', 'https://www.linkedin.com/in/marc-lasry/'],
    ['Brett Gosper', 'Head of Europe & Asia-Pacific', 'National Football League', 'gfqYm3HLjJ3Hi2WAfmmf4cLDWrI.jpg', '8Z1SmNneEspk4mN0uccgRsjszc.png', 'https://www.linkedin.com/in/brett-gosper-45a63331/'],
    ['Teodora Ivanova-Limon', 'Chief Business Officer', 'WTA Ventures', 'ZqznAWRhndyAX1HIOFtDAGh6Ew.png', 'b10sH78U8PBmsSt6dxHhTOCc718.png', 'https://www.linkedin.com/in/teodoraivanovalimon/'],
    ['Adnan Khalef', 'Managing Director', 'The Carlyle Group', 'NNxaTxwoAuvSV6BqobSwCmgKae8.jpeg', '0wKm4XbrfMQTfvoWUOheFFPe7ys.png', 'https://www.linkedin.com/in/adnan-khalef-3a1ab942/'],
    ['Monica Biagiotti', 'EVP, Global Consumer Marketing & Sponsorships', 'Mastercard', 'mDIEzQnpFsK3huNTXGfzbvh3o.png', 'bBFMfwXl1N3bQJsWeCfbDYWbdM.png', 'https://www.linkedin.com/in/monica-biagiotti-ab120b3/'],
    ['Paul Devlin', 'Sub-Industry Leader', 'Amazon Web Services', 'CtbQN6AjuDDQOOsPsoUuTqeDhU.png', 'z71YIjycythtNG4vy2uFCmUh9qM.png', 'https://www.linkedin.com/in/pauldevlin81/'],
    ['Kameryn Stanhouse', 'VP, Global Sports & Entertainment Partnerships', 'IBM', 'kz9VSOZ3FNeXD2b1fFGcb2z4xE.jpg', 'jteIxzQ28sYkB8DYhrbfqZzYmU.png', 'https://www.linkedin.com/in/kkstanhouse/'],
    ['Doriane Pin', 'Development Driver', 'Mercedes-AMG F1 Team', 'KtpA5J6ofMHavCfYlW6hD0h1w.jpg', 'gzaMuoJS9CBROGNAq84UXuW757Q.png', 'https://www.instagram.com/dorianepin/'],
    ['Ariel Wengroff', 'EVP, Global Marketing & Communications', 'Ledger', 'SKGeP3KhrXTh0Q0bXYTJlzAh7c.png', '5c3diShw4jgTyu6lVKIwzHqSJU.png', 'https://www.linkedin.com/in/ariel-wengroff-24522343'],
    ['Caroline Garcia', 'Co-Founder', 'Tennis Insider Club', 'x8oZKvcecHtYwz0VRPK3ifQXI.jpeg', 'yZ5yZ71Q2K3agJLLsCYbGDn0Fs.png', 'https://www.linkedin.com/in/caroline-garcia-8a602a272/'],
    ['Richard Heaselgrave', 'Chief Revenue Officer', 'Paris Saint-Germain', 'r96laVtMzd63qY9BQlNotyW5tho.jpg', 'EkGeSbh7M8mUEePZhtZASn6Hw.png', 'https://www.linkedin.com/in/richard-heaselgrave-513b8723/'],
  ];

  // Full /speakers grid, all 71 speakers, extracted 1:1 from the live site export (order preserved)
  const SPEAKERS_PAGE = [
    ['Vincent-Baptiste Closon', 'Global Director Partnerships', 'BNP Paribas', 'Ct1U5mWGXe3weGxYafxiFmjLew0.png', 'U4n41CTSeJOvs9jq3uhkGR7ZsQ.png', 'https://www.linkedin.com/in/vincent-baptiste-closon-48a21360/'],
    ['Eno Polo', 'CEO', 'ATP Tour', 'KOg82zEr50WLKR1pAW0q3HyoCY.jpg', 'LvuVB5FXB8AX00VvoQVXQyCFvA0.png', 'https://www.linkedin.com/in/eno-polo-ab61371b/'],
    ['Marc Lasry', 'Co-Founder, Chairman & CEO', 'Avenue Capital', 'cYNJZ7PeuRme6ygWI2V7HJT3fU.png', 'assets/logos/avenue-capital-white.png', 'https://www.linkedin.com/in/victoriano-melero-894500/'],
    ['Monica Biagiotti', 'EVP, Global Sponsorships', 'Mastercard', '9gGKGEEO5o6E2zL2yfDkhEc4sRA.png', 'H4SviEOOywoV9CUHur0ApGPFrsg.png', 'https://www.linkedin.com/in/monica-biagiotti-ab120b3/'],
    ['Brett Gosper', 'Head of Europe & Asia-Pacific', 'National Football League', 'o6IYTXQ1tZThwW02waiDwffAw4.jpg', '8Z1SmNneEspk4mN0uccgRsjszc.png', 'https://www.linkedin.com/in/brett-gosper-45a63331/'],
    ['Paolo Della Rovere', 'Managing Director', 'Morgan Stanley', 'pdvLJbsdJnsLkLnZcQRwHa8edfM.png', 'vnw4TG8atkC1YyLDst45dBcmlJY.png', 'https://www.linkedin.com/in/teodoraivanovalimon/'],
    ['Adnan Khalef', 'Managing Director', 'The Carlyle Group', 'NNxaTxwoAuvSV6BqobSwCmgKae8.jpeg', '0wKm4XbrfMQTfvoWUOheFFPe7ys.png', 'https://www.linkedin.com/in/adnan-khalef-3a1ab942/'],
    ['Teodora Ivanova - L.', 'Chief Business Officer', 'WTA Ventures', 'IWY2u2oQiuFsmQaMqpNCSkK4B0o.png', 'u78t8hHR6ITBPPZlQtxtLnQ9jXw.png', 'https://www.linkedin.com/in/teodoraivanovalimon/'],
    ['Arnaud Caudoux', 'Deputy CEO', 'Bpifrance', 'Fp1R3KtVbQmI64dvvojgw6XfyZ8.png', 'PuNtgmxduCCzof75tJ6TSIXJOws.png', 'https://www.linkedin.com/in/arnaud-caudoux-420292/'],
    ['Doriane Pin', 'Development Driver', 'Mercedes-AMG F1', 'RNu7jrhgq63LxRM61EL7rQN3ylM.jpg', 'gzaMuoJS9CBROGNAq84UXuW757Q.png', 'https://www.instagram.com/dorianepin/'],
    ['Valerio Iachizzi', 'Secretary General for Sport', 'FIA', 'GWZNWQOS1CpXY6v1v99AVhcpQys.png', 'wHiMAzRm7EQGhfe4MyN0NJyLw.png', 'https://www.linkedin.com/in/valerio-iachizzi-6600a646/'],
    ['Brandon James', 'SVP, Strategic Growth', 'Spurs Sports & Entertainment', 'UF5pmOCcP70s6ZPANk1piJAb5Sk.png', 'SsKuGBb2cpyeOeLdz0GX1c8dwz8.png', 'https://www.linkedin.com/in/brandon-james-6403a91a9/'],
    ['Bob Markham', 'President, EMEA', 'Accenture Song', 'XH2sk3qWc0t8lumJwOIptl7DBVU.png', 'NJE5DpePqV3KU8QTNT9fGLWcDew.png', 'https://www.linkedin.com/in/bob-markham/'],
    ['Paul Devlin', 'Sub-Industry Leader', 'Amazon Web Services', 'HfF7w9MhUCZ1hA68f9KhOnIufE.png', 'f5MGMMQk3u7GD1OhaZc0ZlqIk.png', 'https://www.linkedin.com/in/pauldevlin81/'],
    ['Dominik Beier', 'Chief Commercial Officer', 'Bitpanda', 'TNacToTo4ykOxM9fSk1VOKjHE.jpeg', 'RzeUuGHE7Q4W7UkCHSTI61WR6k.png', 'https://www.linkedin.com/in/dominik-beier-ba40a999/'],
    ['Caroline Garcia', 'Co-founder', 'Tennis Insider Club', 'tOhW8QQQ5vFvk5hayJhpjN8hI.jpeg', 'yZ5yZ71Q2K3agJLLsCYbGDn0Fs.png', 'https://www.linkedin.com/in/caroline-garcia-8a602a272/'],
    ['Edgar Grospiron', 'President', 'COJOP Alpes 2030', '6grJ04KZbnZ2Lf7cwBumzPwcs.png', 'V4n4JOXkdawihqpgu1of86uIU.png', 'https://www.linkedin.com/in/edgar-grospiron/'],
    ['Victorien Tixier', 'CEO & Co-founder', 'ScorePlay', 'pg7IL44tyUHzJrqLTkLGD5Q2YCc.jpg', 'hi0liccijnZPVpJgDDaD7mnZVM.png', 'https://www.linkedin.com/in/victorien-tixier-28543510b/'],
    ['Steve Carter', 'CEO', 'Bolt6', 'nYGYoSqdHFMmZOXMd2iZtwUh0I.jpeg', 'ZE4dbNWeozgmtiRYZnFwg5QgH2Y.png', 'https://www.linkedin.com/in/steve-carter-59030128/'],
    ['Amélie Oudéa-Castéra', 'President', 'French Olympic Committee', 'Teonqpy9c2W494iZpRlPL4DtX8.png', 'sVuIKYoM6i7L0U4c1QymUdME0.png', 'https://www.linkedin.com/in/amelieoudeacastera/'],
    ['Sanjog Gupta', 'CEO', 'International Cricket Council', 'l7GSPEAIwKMEs27tVgXBN3yJBnE.png', 'TV3bAMfP8MzWbKhkItwViUE6xo.png', 'https://www.linkedin.com/in/sanjog/'],
    ['David Trezeguet', 'International Ambassador', 'River Plate', 'q1se2o8j9o6q67hMb6jCS2MR8.png', 'V22od8P68GbYvMu792hTWQYM2g4.png', 'https://www.instagram.com/trezeguetofficial/'],
    ['Jérôme Parmentier', 'VP, Media Rights & Partnerships', 'IOC', 'rLAVv82JfRx22lf0feQNzcRIg.png', 'NJHSEws3U3PIKLvdZWkOo9aLsfc.png', 'https://www.linkedin.com/in/jeromeparmentier/'],
    ['Rebecca Smith', 'CEO & Founder', 'Crux Football', '8gCUjJ2gcYk88RIgvNpU5jb1k.jpg', '6OrgnRVFRpu95mm1IHh3QFmI88.png', 'https://www.linkedin.com/in/rebecca-bex-smith-0798106/'],
    ['Kyang Yung', 'Chief Investment Officer', 'Gamma Waves Partners', 'NPxvIK1ahJtK6aTBHkdSslw.jpg', '3cAhKpkihqzD6n5pZc2CDMSlVM.png', 'https://www.linkedin.com/in/kyangyung/'],
    ['Ariel Wengroff', 'EVP, Global Marketing', 'Ledger', 'sNKOTwmc4jc7bXKkVmPKBypv6Y.png', '5c3diShw4jgTyu6lVKIwzHqSJU.png', 'https://www.linkedin.com/in/ariel-wengroff-24522343/'],
    ['Richard Heaselgrave', 'Chief Revenue Officer', 'Paris Saint-Germain', 'r96laVtMzd63qY9BQlNotyW5tho.jpg', 'EkGeSbh7M8mUEePZhtZASn6Hw.png', 'https://www.linkedin.com/in/richard-heaselgrave-513b8723/'],
    ['Chris Hume', 'Director', 'Champion Data', 'cpSfWIt3sfqFNx3Ll0sFJCU8mVQ.jpg', 'AZHQfZ6ftdmQNdNgqsEwFOi6TMs.png', 'https://www.linkedin.com/in/chris-hume-9603384/'],
    ['Lorenzo Vitali', 'Co-Sector Head Media, Sport', 'DLA Piper', '3QfzHlnlgCcCgPLFlYFGLdGa0uE.jpg', 'z9I5mmi0jJq8AhE26eP7Skfl6M.png', 'https://www.linkedin.com/in/lorenzo-vitali-446662297/'],
    ['Ugo Valensi', 'CEO', 'Volleyball World', 'x40RcTCHQtzPKRfiXQCbo5oY.jpeg', 'ymkwAW6BKs1RibbDG5cGzVirMk0.png', 'https://www.linkedin.com/in/ugo-valensi/'],
    ['Josh Pyatt', 'Partner', 'WTSL', '7WLJROzIxkug2pcbTmfDpaU4hw.png', 'B4fZ6SRmtXYmZhymM5UEWBYJfY8.png', 'https://www.linkedin.com/in/josh-pyatt-58b646183/'],
    ['Kameryn Stanhouse', 'VP, Global Partnerships', 'IBM', '26ZoG4VEcUOYVzvhkzjgbZHZY.jpg', 'PhRKRIMKW2Ix48Ep151f2sIf1A.png', 'https://www.linkedin.com/in/kkstanhouse/'],
    ['Jamie Horowitz', 'President & Co-founder', 'Omaha Productions', '3qDR6O2GDk70Q748AdrFhFtepCI.jpg', 'Ed2708FxAC1CNwSay8GKT1jk8xQ.png', 'https://www.linkedin.com/in/jamie-horowitz-5153597/'],
    ['Arjun Kapur', 'Vice President', 'Left Lane', 'jW9ZIvK1FFDsYJ67Ep7xOzwD6k.jpg', '2GsGoD7sFxOkGrSrYlTPCTtNtfU.png', 'https://www.linkedin.com/in/arjun-kapur7/'],
    ['Michele Ciccarese', 'Commercial Director', 'Lega Serie A', 'udb6kA5iY9iQXIA9G0fRfPzPHg.png', 'JBXrnydivE1GEU9OpF6S4zSlUG4.png', 'https://www.linkedin.com/in/micheleciccarese/'],
    ['Kushaan Ahuja', 'Partner', 'Will Ventures', 'ZIezVLEQ6WTmMov8zVurQ9bUI.webp', 'BmQkevU6v9j3VLsXLDFxWJgJtM.png', 'https://www.linkedin.com/in/kushaan-ahuja-68a32940/'],
    ['Marc Cohen', 'Regional Manager', 'Fever', 'LqinovjiZkrLlHr7ro2YpPqRA4s.png', 'jrt7GZF4KyxLYMJ9wGBM0YAKSlE.png', 'https://www.linkedin.com/in/marc-cohen/'],
    ['David Coulthard', 'Co-Founder', 'Velocity Experience', 'tiBi34zT0Do6HNFgNj0xvCFEiw.webp', 's9SrfZXjRijd9bacgPH1APyAU.png', 'https://www.linkedin.com/in/david-coulthard12345/'],
    ['Raquel Braun', 'Chief Commercial Officer', 'League One Volleyball', 'xeiOHOGIvj4wEx0O4pfh7clk1n8.png', 'p0GEnD9Th9aXrGkpPl2ncZEkvPc.png', 'https://www.linkedin.com/in/raquelbraun/'],
    ['Charlie Dewhurst', 'Chief Commercial Officer', 'SailGP', 'YWgjjrlHJ2kCYo89O3qVv17VTs.jpg', 'FkaA5HtlWyirrHvZwNtZMHZm8w.png', 'https://www.linkedin.com/in/charlie-dewhurst-62289758/'],
    ['Florian Lamblin', 'CEO', 'UTMB International', 'Ra07CCjG5ZDKjTy2mXu9F1H5FM.jpeg', 'huEoYutBRgMSecdf0o0YUDHiwY.png', 'https://www.linkedin.com/in/florianlamblin/'],
    ['António Caçorino', 'CEO & Founder', 'APEX', 'b554CkGsKD0mf5o7ICzfsF4gE.jpg', 'e5h6TNotYVIUyE0bu5YA3DoU4Y.png', 'https://www.linkedin.com/in/antonio-cacorino/'],
    ['Kerstin Lutz', 'CEO', 'Billie Jean King Cup', 'xShbCFVd8xtZ3Pec2HpOB8fk.png', '9LhM5TDyQR07wVwfqu96O4MGg.png', 'https://www.linkedin.com/in/kerstin-lutz-20b6573/'],
    ['Patrick Mouratoglou', 'CEO & Founder', 'UTS', 'M9jhhxTuShdkPkOYdEVatipgVo.jpg', '0D2EG0owCMrfKi2NDevjfCtakPs.png', 'https://www.linkedin.com/in/patrickmouratoglou/'],
    ['Laurent-Eric Le Lay', 'Sports Director', 'France Télévisions', 'ABuVzZlPSSaeZSuIyfbJXoUoZaU.webp', '5BOtza5epQAO6mfiIiX6ay73o4.png', 'https://www.linkedin.com/in/laurentericlelay/'],
    ['Mofses Kechichian', 'Managing Director', 'TRAIL Capital', 'SC5jKA69BcOxMSril0AxRPtLLqg.webp', 'hrcSIpOBqLYeHUVdPxrXWvlcaPk.png', 'https://www.linkedin.com/in/mofses-kechichian-809989111/'],
    ['Sunil Patel', 'CEO & Co-founder', 'Whisper Group', 'mVrDv5p5l0KgPCCUQRgWyhcwNY.jpg', 'wZ5rVWgXfFERPZ6XJba1g8zmVs.svg'],
    ['Charles Frémont', 'Senior Innovation Hub Manager', 'UEFA', 'XA5qnTv4yC9c6D6kuOzk7Iq20Zg.jpg', 'FjIP5blMI4GqOyJ6DM2AFGT8pLs.png', 'https://www.linkedin.com/in/charles-fr%C3%A9mont-17988139/'],
    ['Dominic Thiem', 'Entrepreneur', 'Grand Slam Winner', 'zgSiRRf8uaS2NtEv28uhqIUrahw.jpeg', 'F4sRsiPUORsuwZ8Zz8BEtPdEI.webp', 'https://www.linkedin.com/in/dominic-thiem-03a46a291/'],
    ['Samuel Tamba', 'Founder & CEO', 'AxeOne', '4Wa0dEkyzt8Fhv8AhlVR3eRykA.png', 'eukTT2eqCfLEf1nstRwB7xsc.png', 'https://www.linkedin.com/in/samuel-tamba/'],
    ['Pedro Félix da Costa', 'Chief Commercial Officer', 'APEX', '9TF5cswcp1ZksvnQueEku8nTt0c.jpg', 'DsCEik0BA7rP5MUUZpee8bO8.png', 'https://www.linkedin.com/in/pedro-f%C3%A9lix-da-costa-a23309205/'],
    ['Malcolm Lemmons', 'Founder', 'Vetted Sports', '1n9ELr1BPUQI7H9MdJHcG6Rrs.jpg', 'UGxoUp27I64v6olmxjbE5pjI.png', 'https://www.linkedin.com/in/malcolmlemmons/'],
    ['Lisa Billard', 'F1 Academy Driver', 'Gatorade', '5qYROyrDnVJIBJJzjTy6W8qMWH4.jpeg', '9kV5habPwLlDdIvKQ3Tst6BuZeI.png', 'https://www.instagram.com/lisabillard_driver/'],
    ['Jefferson Plentz', 'CEO & Founder', 'StarBro Sport Tech', 'fwC3DkHHZZ5qhlVrvmEHTunqsJ4.png', 'lWT4mXTlpl8UFENBW3EkJoVgI8w.png', 'https://www.linkedin.com/in/jplentz/'],
    ['Stéphane Bénichou', 'Managing Director', 'InTheBoardroom', '5Sz6TZUFej1aTgoPCZidGxrYY.jpeg', 'uQqmegKdmysV8pzVazxPwSC4B54.png', 'https://www.linkedin.com/in/stephane-benichou-itb'],
    ['Charlie Stebbings', 'Head of Sport', '20VC', 'BuPSqhLT52NQIR9BN64DO9d3Ec.jpg', 'jU3GHGx4Cq29Idh1jhAXtMm4.png', 'https://www.linkedin.com/in/charlie-stebbings-629059114/'],
    ['Mathias Kuhn', 'Lawyer', 'DLA Piper', 'lHIr7bEUwdQUnu9q5pxN0VimFg.jpg', 'z9I5mmi0jJq8AhE26eP7Skfl6M.png', 'https://www.linkedin.com/in/mathias-kuhn-b10a0b59/'],
    ['Zack Weiner', 'Overtime', 'Co-Founder', 'pO7mbetJjwEnUWLbs6qFXnk.png', 'N7jiIpc10yi2879x9yJWe8J3TA.png', 'https://www.linkedin.com/in/zack-weiner-02071237/'],
    ['Antoine Magnan', 'Strategic Advisor', 'Genesis Magma Racing', 'RLfuMl4flBPuUUn7NbGEppUqE.png', 'TrNXu1NH8kJbtv55QG7UiShOd9Q.png', 'https://www.linkedin.com/in/antoine-magnan-86506a2/'],
    ['Adriana Crovetto', 'Investor', 'Gamma Waves Partners', 'G8JCKXENjWIMdqZJ8T2iPOFgI8.jpg', '3cAhKpkihqzD6n5pZc2CDMSlVM.png', 'https://www.linkedin.com/in/adriana-crovetto-2a14b184/'],
    ['Danny Menken', 'Co-Founder & General Partner', 'Athvance Capital', 'm9f95fpcRMqDIYHr5nWy622oONE.png', '9x9L306y3TV6nNw4V6S2ofj9Kc.png', 'https://www.linkedin.com/in/dannymenken/'],
    ['Nicolas Burger', 'CEO', 'Alltricks', 'q3zQxZZwG5EL3UccEVE3ZxtmY.png', 'auokZr6m46PL5IhMBRzPTf05V8.png', 'https://www.linkedin.com/in/nicolas-burger-2a05891/'],
    ['Mark Wyatt', 'Managing Director', 'Alvarez & Marsal', 'v9vatvO0s2B6K43xRT7bxN1gXk.jpg', 'E0E6d5Yf5scc76iZycietG5N8Cc.png', 'https://www.linkedin.com/in/corporatefinanceadvisor/'],
    ['João Sousa', 'Former ATP Player', '4-Time ATP Title Winner', '8g65vFNaKxjIrSDHuVWrXJVIw.png', 'LvuVB5FXB8AX00VvoQVXQyCFvA0.png', 'https://www.linkedin.com/in/jo%C3%A3o-sousa-b8a2bb390/'],
    ['Lucy Mills', 'Founder', 'Ready Sport Global', 'eZEY2a2gygCpktH5dQNqhW20A.png', 'jaARswXrTFB34qRzk2ns4wnAmE.png', 'https://www.linkedin.com/in/lucycmills/'],
    ['Aymeric Labaste', 'Head of Intl. Development', 'Roland-Garros', 'hGtACndj3JcYH4Ow5IqRSnM1J8.jpg', 'LTK4MH6czKBOScRebF0qe00pAA.png', 'https://fr.linkedin.com/in/aymericlabaste'],
    ['Stefan Lavén', 'Founder', 'Data Talks', 'EANl9dyv7EACSc2huQO4In2r0.png', 'Clm2j7I9IKuW0aS9UDH8kfmic.png', 'https://www.linkedin.com/in/stefan-laven/'],
    ['Juanjo Martin', 'Players Relation Senior Manager', 'ATP Tour', 'nEH1b6TGpIt8RhaFJOPwvZkiU.jpg', 'soA1GFaOfMNDIwQV0rvfHYKoc94.png', 'https://www.linkedin.com/in/juanjomartinortiz/'],
    ['Andy Marston', 'Head of Corporate Ventures', 'The Players Fund', 'KkyQMkFZGwFse8tkTEFCbCjThXc.png', 'sqHmdkMTl1k5Dfp06UmbuVASBQ.webp', 'https://www.linkedin.com/in/andrew-marston/'],
    ['Mark Hartmann', 'Tech Entrepreneur', 'Beyond the Athletes', 'vrcZZ0vrb9dW50knLuxD8YOk.jpeg', 'sK9XKFOLytdB2Sb2GSVBxKmAng.png', 'https://www.linkedin.com/in/mark-a-hartmann-0387ba1/'],
  ];

  const toObj = ([name, role, org, photoFile, logoFile, link]) => ({
    name, role, org, link: link || null,
    photo: photoFile ? (photoFile.indexOf('/') >= 0 ? photoFile : CDN + photoFile) : null,
    logo: logoFile ? (logoFile.indexOf('/') >= 0 ? logoFile : CDN + logoFile) : null,
  });
  const speakersHome = HOME.map(toObj);
  const speakersAll = SPEAKERS_PAGE.map(toObj);

  // ── Home "Our 2026 Speakers", featured list (9) shown beside the weekly reel ──
  // [name, role, org, photoFile, youtubeUrl], replace each youtube URL with the speaker's real clip.
  const REEL_SPEAKERS = [
    ['Eno Polo', 'CEO', 'ATP Tour', PH + 'eno-polo-reel-card-clean.png', 'https://www.youtube.com/watch?v=xUzsYbMg_XE', true],
    ['Romy Gai', 'Chief Business Officer', 'FIFA', PH + 'romy-gai-reel-card.png', 'https://www.youtube.com/watch?v=qaI9dl_Og4E', true],
    ['Marc Lasry', 'Co-Founder & CEO', 'Avenue Capital', PH + 'marc-lasry-reel-card.png', 'https://www.youtube.com/results?search_query=Marc+Lasry+Avenue+Capital', true],
    ['Doriane Pin', 'Development Driver', 'Mercedes-AMG F1', PH + 'doriane-pin-reel-card.png', 'https://www.youtube.com/watch?v=5dGf75QD0-Y', true],
    ['Caroline Garcia', 'Co-Founder', 'Tennis Insider Club', PH + 'caroline-garcia-reel-card.png', 'https://www.youtube.com/watch?v=9elD_ZXbhXM', true],
    ['Patrick Mouratoglou', 'CEO & Founder', 'UTS', PH + 'patrick-mouratoglou-reel-card.png', 'https://www.youtube.com/watch?v=PBzpHEZXBko', true],
    ['Dominic Thiem', 'US Open Winner', 'ex-pro Athlete', PH + 'dominic-thiem-reel-card.png', 'https://www.youtube.com/watch?v=OTeOgjTBA04', true],
    ['David Coulthard', 'Company Director', 'Velocity Experience', PH + 'david-coulthard-reel-card.png', 'https://www.youtube.com/watch?v=A_AZ-KhhTwo', true],
    ['Teodora Ivanova', 'Chief Business Officer', 'WTA Ventures', PH + 'teodora-ivanova-reel-card.png', 'https://www.youtube.com/watch?v=yw_WHRvrm4I', true],
  ];
  const reelSpeakers = REEL_SPEAKERS.map(([name, role, org, photoFile, youtube, staticCard]) => ({
    name, role, org, youtube, staticCard: !!staticCard,
    photo: photoFile.indexOf('/') >= 0 ? photoFile : CDN + photoFile,
  }));

  // ⭐ ÉDITION HEBDOMADAIRE, change la vidéo du réel ici, en une ligne.
  // Dépose ton fichier .mp4 vertical (9:16) dans reels/ puis mets src: 'reels/ton-fichier.mp4'.
  const weeklyReel = {
    src: 'reels/patrick-mouratoglou.mp4',   // ex. 'reels/semaine-25.mp4' (fichier hébergé sur le site, pas d'embed)
    poster: CDN + 'M9jhhxTuShdkPkOYdEVatipgVo.jpg',
    speakerName: 'Patrick Mouratoglou',
  };

  // 🎬 Carrousel de réels (swipe), un réel par speaker. Remplace src par le .mp4 vertical (9:16) hébergé.
  // 👉 Vidéo réelle par speaker : ajoute 'Nom': 'reels/fichier.mp4' ici.
  const REEL_VIDEOS = {
    'Eno Polo': 'reels/eno-polo.mp4',
    'Teodora Ivanova': 'reels/teodora-ivanova.mp4',
    'Patrick Mouratoglou': 'reels/patrick-mouratoglou.mp4',
    'David Coulthard': 'reels/coulthard.mp4',
    'Caroline Garcia': 'reels/caroline-garcia.mp4',
    'Dominic Thiem': 'reels/dominic-thiem.mp4',
    'Romy Gai': 'reels/romy-gai.mp4',
    'Doriane Pin': 'reels/doriane-pin.mp4',
    'Marc Lasry': 'reels/marc-lasry.mp4',
  };
  const reels = reelSpeakers.map((s) => ({
    name: s.name, role: s.role, org: s.org, youtube: s.youtube, staticCard: s.staticCard,
    poster: s.photo,
    src: REEL_VIDEOS[s.name] || heroVideo,
  }));

  // Auto-scrolling "Trusted by the industry leaders" marquee, real partner logos
  const marquee = ['0wKm4XbrfMQTfvoWUOheFFPe7ys.png',
    'LvuVB5FXB8AX00VvoQVXQyCFvA0.png', 'gGOnNMRaqcQzaTsChA9D1VuSc.png', '5yqukeigbpRRQIZRKWRlrXGxbM.png',
    'bBFMfwXl1N3bQJsWeCfbDYWbdM.png', '8Z1SmNneEspk4mN0uccgRsjszc.png', 'sTkuESzrslw6aMGjJGsZPPDMN0.png',
    'wsPFfMrxlpOr8t3fkNl0SZZXc44.png', 'aAww8JOfIK3o1h5YTfcsu5ebts.png', 'w6V1nYCQ7XNBzfM8bEzPRcfeXU.png']
    .map((f) => CDN + f);

  // "They will be at", tabbed auto-scrolling logo marquees (real logos per category)
  // A few clubs use proper supplied artwork: Monaco & Spurs are reversed (light) versions made
  // for dark backgrounds, shown as-is (no mono filter); the Timberwolves line-art keeps the
  // default white treatment and reads cleanly.
  const LOCAL_LOGOS = {
    'wC2YyNaB5ps0bESRHwqgP72yU.png': { src: 'assets/teams/minnesota-timberwolves.png', alt: 'Minnesota Timberwolves', cls: 'wmq__item--emblem wmq__item--invert' },
    'oJH0nJVskCP7oYVPm9ZSGW2I.png': { src: 'assets/teams/as-monaco.png', alt: 'AS Monaco', cls: 'wmq__item--emblem wmq__item--asis' },
    'Yc16FE3ZQ5Ak9fGUjTaLZNJUA.png': { src: 'assets/teams/san-antonio-spurs.png', alt: 'San Antonio Spurs', cls: 'wmq__item--asis' },
    'laliga.png': { src: 'assets/teams/laliga.png', alt: 'LaLiga' },
    'eintracht.png': { src: 'assets/teams/eintracht-frankfurt.png', alt: 'Eintracht Frankfurt', cls: 'wmq__item--emblem wmq__item--invert' },
    'mancity.png': { src: 'assets/teams/manchester-city.png', alt: 'Manchester City', cls: 'wmq__item--emblem wmq__item--asis' },
    'chelsea.png': { src: 'assets/teams/chelsea-fc.png', alt: 'Chelsea FC', cls: 'wmq__item--emblem wmq__item--asis wmq__item--lg' },
    'zozpBXQdfLJ30K3n1jr40t3CD3Q.png': { src: 'assets/teams/olympique-marseille.png', alt: 'Olympique de Marseille', cls: 'wmq__item--emblem wmq__item--asis' },
  };
  const wallCat = (label, altPrefix, files) => ({
    label,
    logos: files.map((f, i) => {
      const o = LOCAL_LOGOS[f];
      return o ? { src: o.src, alt: o.alt, cls: o.cls } : { src: CDN + f, alt: altPrefix + ' ' + (i + 1) };
    }),
  });
  const walls = [
    wallCat('Teams, Leagues, Federations', 'Team/League', [
      'MRTVHFaexoWQmGLzmbmR6H9SHo8.png', 'XEmuKda3Zj9r5Oz4c2yszPNxgY4.png', 'LvuVB5FXB8AX00VvoQVXQyCFvA0.png',
      'laliga.png', 'FjIP5blMI4GqOyJ6DM2AFGT8pLs.png', 'aL2i6uYyGsyWQVKALkJvSkov0.png', 'vW8YRjMjRcJWDpC9F61JBG5fo.png',
      'Yc16FE3ZQ5Ak9fGUjTaLZNJUA.png', 'eintracht.png', 'wC2YyNaB5ps0bESRHwqgP72yU.png', 'AJe4iCWXGUzIW3VsPMPiExPkFkw.png',
      'V22od8P68GbYvMu792hTWQYM2g4.png', 'mancity.png', 'S0UY3kfGWV8cxlgxNwJvADtwY.png', 'RHRmacpc1m7U97iyxSRn6g0m98.png',
      '5yqukeigbpRRQIZRKWRlrXGxbM.png', 'pDrQVy8eb9kWOJe4yvtm4rQkM.png', 'chelsea.png', 'zozpBXQdfLJ30K3n1jr40t3CD3Q.png',
      'gA8oXxDpaPQhqZW3E98ytj26bg.png', 'oJH0nJVskCP7oYVPm9ZSGW2I.png', 'fmVAjJOAhVQvY8fDp7Wnip849c.png',
    ]),
    wallCat('Brands', 'Brand', [
      'TCaxRUNJ7T3cE1ZaFBkQDDd74.png', 'gCFryWsRGnkNFywuNuk8Fz8lOKM.png', 'xPvxSYuxSkm0ufFNj8WpbIdmzWw.png',
      'YBVuke31FU4muojOPxD7a4NudY.png', '0Zfyd7cXhlGnUfyziX5M1MEglPw.png', 'bBFMfwXl1N3bQJsWeCfbDYWbdM.png',
      'tcWfcQzMF2r2XlNtuz47A99duw.png', 'pDnBxzTcQ0KLnJoYJllbvWgK0nY.png', 'lNldTvHYGBgBi1ZJnHmnT8Pj1w.png',
      '6GE77GEU6kY5TrsR4DzdQWrM9U.png',
      'FscUvZ0NPqx1KBH08t42u0vpPjI.png', '5c3diShw4jgTyu6lVKIwzHqSJU.png', 'F7PJ2i4hJl0aWahXbXj3lnqE.png',
      'XT4RZyfVRFKXxdhEsN1xx1Gd8.png',
    ]),
    wallCat('Investment & Advisory Firms', 'Investment', [
      'gGOnNMRaqcQzaTsChA9D1VuSc.png', 'bkMmpr6NP0OUpWnewViZQLRfc.png', '0wKm4XbrfMQTfvoWUOheFFPe7ys.png',
      'T9cbGVkT9VMMbAhR50Z9LLCHOw.png', '3cAhKpkihqzD6n5pZc2CDMSlVM.png', 'HZaR7L01XlCApAMTJDGF1DhqV18.png',
      'AMMZrcroRhVn7IwGNzCQp6LSM.png', 'LV7eydEqXnc6xWgv8Lo64rwVVg.png', '8ulJACMJgZxJslxsQdJnnbp1Ckk.png',
      '3GsgZxvyIuhhB9KCCEPR2QLcTtw.png', 'CKTErho3wj186JGVWXcKsntirjg.png', 'dXxIkypsDmW3oSX99NNj3iQko.png',
      'PddPF3w300JMQWwuNSqk8GrXm4.png', 'C7JsfwFbbAZGUvwvUhPVNqTK2Q.png', 'p8xTFfSybbF09YGqZGq2WWH7Q.png',
      'PVgY1RRv24tCPf3oaAEaxIYzGSI.png', 'k8LcAMwlh3iR4AQaLJiJhVcjBU.png', 'ngI5KXaJLlPXMSJ2U1Gxaf32nks.png',
      'jWKcDuG97p5UBzgBI9ICpcNSes.png',
    ]),
    wallCat('Agencies', 'Agency', [
      'wTuzIWFWngbNaIyGggeCRR74hk.png', 'd4LMpGnJyR2xO2pXsStgdGrn6k.png', '4KaHgvQ8WonhPZ71rPLAM0dwWEE.png',
      'KCjimyWDqtsKrvD36jCeSeUGjQ.png', 'HJs1N9pV0pUKLyoGaDj35Muv4.png', '2EXpptyCZGPsZGz1MvYEWB0GFA.png',
      '53w9ACsARidQh3ZfN6XHDC1Wl38.png', 'GqZpKFQQzzc84NDX3fJR97OVCo.png', 'e9W6QzZTLBEPGRzVM9JC57hg8Q.png',
      'JYAZ8D6eAHAST2jdDH2Deif1j0.png', 'rY0BbMlkgRxuTSUucaGzxQcX6U.png', 'xyASCEPsvX9SdVJK6FnfWojbss.png',
    ]),
    wallCat('Technology & Data', 'Tech', [
      'z11y40PmGss5LtiR6MkrnS05FA.png', 'mmQYwNgeA9MitLHEJntDfJcTE.png', '0jDYuLRxy0uVwREwWW9d8AoaAGM.png',
      'uZhnpoZS18PaCIf8oOvkFRsh0.png', 'wsPFfMrxlpOr8t3fkNl0SZZXc44.png', 'QS6ulzt1neb4SQhOfnwrvfNBUNc.png',
      'lWT4mXTlpl8UFENBW3EkJoVgI8w.png', 'QubFoZOScAwGfHjW0Z48VazSc.png', 'ozhOF81N5WhgGBacANg27I6R6Q.png',
      'XTeuNidKJmD8gly8TBrlbTxkM.png', 'ppBFtFJ6N5Ns7QhjlBBJ21pSxJY.png', 'AZHQfZ6ftdmQNdNgqsEwFOi6TMs.png',
    ]),
    wallCat('Media & Entertainment', 'Media', [
      'twvoFscjUYUGh7o1KIg1DiCy5EQ.png', 'EgxVaNXbTBz7xZMpM5m1gMNN6Cs.png', 'HGSVsXCy5NLV1cBkl5OO09r8YEE.png',
      'PjAYGZZjOwq1PGNduvTO3GvHA7E.png', 'IrC48C4TOLG8tO0d1wNpCKNLspw.png', 'BEXkWr9iiMm6bFecLv1oCG8Zo.png',
      'txLWj4MTTaAgqHAxz5sHlVo7wHw.png', 'uX0tn3POfXz2c8eUf9ycWVGXQrA.png',
      'icCd3Nf62K6XGd1yD327NPSYp4.png', 'R898MyAtJ827zhXIpGGXuyoPjg.png', 'WdS44dVFpkekKblIdgATe5QOk.png',
      'sCJFTrXmUNlz0wH9CVvBT2B1g.png', 'B2mDXyEk5zSAbiKFYNLvipEKaE.png', '23zLzo3nxB7Wfehfulln4Ya0Vls.png',
    ]),
  ];

  // Partner tiers, real partner logos from the live site (tier drives logo size)
  const partnerTiers = [
    { label: 'Founding Partner', tier: 'founding', logos: [
      ['slCL53NvqEbZ8mCu0dMoIJNesTI.png', 'BNP Paribas'],
    ] },
    { label: 'Gold Partner', tier: 'gold', logos: [
      ['wsPFfMrxlpOr8t3fkNl0SZZXc44.png', 'Gold Partner'],
    ] },
    { label: 'Silver Partners', tier: 'silver', logos: [
      ['h2ylcv16WF79aJJDNZV7eB1I.png', 'Silver Partner 1'],
      ['vgwtaKPe6QQld31Xq22jdBb5ujA.png', 'Silver Partner 2'],
    ] },
    { label: 'Bronze Partners', tier: 'bronze', logos: [
      ['ApC508naRqFg0TN9fpzFRL5GH4.png', 'Bronze Partner 1'],
      ['51FzYj8FGpxXXAodofaQwk7Bxp0.png', 'Bronze Partner 2'],
      ['ZL9q0YnHad9wTMN7EYvmRyofKJU.png', 'Bronze Partner 3'],
      ['gmw06UOZ9lQ1aswF6dcD91ooA.png', 'Bronze Partner 4'],
      ['iPqm6K8LH9lPMP9aJDmaBeNWsI.png', 'Bronze Partner 5'],
      ['Lr2KaB1rioLJDY7kQqEho92WNk.png', 'Bronze Partner 6'],
      ['jrt7GZF4KyxLYMJ9wGBM0YAKSlE.png', 'Bronze Partner 7'],
      ['hrcSIpOBqLYeHUVdPxrXWvlcaPk.png', 'Bronze Partner 8'],
      ['9zQ9UqsFzWAFe3xtKRYpRZyqkek.png', 'Bronze Partner 9'],
    ] },
    { label: 'Startup Partners', tier: 'startup', logos: [
      ['Bv5Sgtdi4VfPQIzBmZKCJwi7w.png', 'Startup Partner 1'],
      ['zDqAiHLJ3Z4vbI7xU9UxCkc.png', 'Startup Partner 2'],
      ['hppcDIccYnC2TssJg640CT7QA24.png', 'Startup Partner 3'],
      ['rl3Fc5MNsSsSfO0eeR1SUwNvg.png', 'Startup Partner 4'],
      ['Xjt8pLBR4dVIZlkcVcNoZ0Ghd50.png', 'Startup Partner 5'],
      ['r8A6MHTf9S0GKSH6ayQGMiekc.png', 'Startup Partner 6'],
      ['vns24K9oT8hyEX2YALjAsmsZCJM.png', 'Startup Partner 7'],
      ['C8UZztxEFetWskhB049Lt54e2Y.png', 'Startup Partner 8'],
      ['Wx89eI6F7gjdgsumOL51WwAxkyE.png', 'Startup Partner 9'],
    ] },
    { label: 'Media Partners', tier: 'media', logos: [
      ['kzhbCpxTZZTgb6Bwx0In0mX2qg.png', 'Media Partner 1'],
      ['fNHh43BAcwcP5o1whTzUMF9dLs.png', 'Media Partner 2'],
      ['PRS2D3RGXtVIcFjU0w0Ghs.png', 'Media Partner 3'],
    ] },
  ].map((t) => ({ label: t.label, tier: t.tier, logos: t.logos.map(([f, alt]) => ({ src: CDN + f, alt })) }));

  // Attendee snapshot (gated PDF): a curated extract of the 2026/2027 attendee list.
  // Displayed as three vertically scrolling columns of role + entity cards.
  const snapshotStats = [
    { value: '1,200+', label: 'Attendees' },
    { value: '70%', label: 'Senior decision-makers' },
    { value: '250+', label: 'C-level executives' },
  ];
  const snapshotPdf = 'assets/sgn-2026-attendee-snapshot.pdf';
  const snapshotAttendees = [
    [
      ['Chief Business Officer', 'FIFA'], ['CEO', 'ATP Tour'], ['Chief Revenue Officer', 'Paris Saint-Germain'],
      ['EVP, Global Sponsorships', 'Mastercard'], ['Head of Europe & Asia-Pacific', 'NFL'],
      ['Secretary General for Sport', 'FIA'], ['VP, Global Partnerships', 'IBM'], ['CEO', 'Volleyball World'],
      ['Sales Director Football EMEA', 'Nike'], ['Head of Content Operations EMEA', 'TikTok'],
      ['Managing Director', 'Morgan Stanley'], ['CEO', 'International Cricket Council'],
    ],
    [
      ['VP, Media Rights & Partnerships', 'International Olympic Committee'], ['President', 'CNOSF'],
      ['Sr Director Partnerships', 'Netflix'], ['Chief Commercial Officer', 'SailGP'],
      ['Global Director Partnerships', 'BNP Paribas'], ['Managing Director', 'The Carlyle Group'],
      ['President, EMEA', 'Accenture Song'], ['Head of Intl. Development', 'Roland-Garros'],
      ['Senior Innovation Hub Manager', 'UEFA'], ['GVP, Head of Legal', 'Warner Bros. Discovery Sports'],
      ['Director of Sports & Media Partnerships', 'Snap Inc.'], ['CEO', 'Paris FC'],
    ],
    [
      ['Chief Business Officer', 'WTA Ventures'], ['President', 'COJOP Alpes 2030'],
      ['Deputy CEO', 'Bpifrance'], ['Sports Director', 'France Télévisions'],
      ['Managing Director & Partner', 'Boston Consulting Group'], ['Head of Tennis', 'beIN Sports'],
      ['SVP, Strategic Growth', 'Spurs Sports & Entertainment'], ['Chief Commercial Officer', 'Lega Serie A'],
      ['Head of Partnership Acquisitions', 'Alpine F1 Team'], ['EVP, Global Marketing', 'Ledger'],
      ['Sub-Industry Leader', 'Amazon Web Services'], ['Chairman, Unified World Cup', 'Special Olympics'],
    ],
  ].map((col) => col.map(([role, entity]) => ({ role, entity })));

  const stats = [
    { number: 1200, suffix: '', label: 'Attendees' },
    { number: 300, suffix: '', label: 'Organizations' },
    { number: 100, suffix: '', label: 'Speakers' },
    { number: 70, suffix: '%', label: 'Director level & up', progress: 70 },
  ];

  const tickets = [
    { tier: 'Startup', price: '€390', intro: 'Eligibility Requirements',
      lede: 'To qualify for the discounted pass and unlock full PRO-level perks, your startup must meet the following criteria:', perks: [
      'Funding Stage: Must have raised less than $3 million in total funding.',
      'Company Age: Must be under 5 years old.',
    ], note: 'Pass Benefits: Includes the exact same perks as a PRO ticket.' },
    { tier: 'Pro', price: '€790', intro: 'PERKS OF A PRO TICKET:', perks: [
      'Full 2-day access to all panels, keynotes & workshop sessions',
      'Exhibition floor access for both days',
      'All food and drinks during the event',
      'Access to the SGN networking app & networking lounge',
    ] },
    { tier: 'VIP', price: '€2290', featured: true, intro: 'PERKS OF A PRO TICKET PLUS:', perks: [
      'Invitation to the VIP Dinner',
      'Access to the VIP Lounge on both days',
      'Access to private meeting rooms',
      'VIP Welcome Bag',
    ] },
  ];

  // "A summit full of opportunities", live photo cards (hotlinked like the rest of the kit)
  const opportunities = [
    { title: 'Build Meaningful Connections', photo: CDN + 'fgOqDRsDf4r3haBleHzcp5GSE.jpg', items: ['Network with right holders, brands, partners & investors', 'Curated meetings', 'Private meeting rooms'] },
    { title: 'Explore Strategic Insights & Future Trends', photo: CDN + 't4dVvEId1PV0qnMajtfRbF5rvi8.jpg', items: ['100 Speakers', '5 Future-oriented themes', 'Real-world case studies'] },
    { title: 'Business Opportunities', photo: CDN + 'grjj04CQv3NcrpZa86oFpvIHN0Q.jpg', items: ['Showcase your solution & product', 'Explore collaboration opportunities', 'Connect with global sports leaders'] },
  ];
  const oppStar = CDN + 'Qj6Z1idsH3DOGNFrJeriBx8fHZI.png';

  // Why Attend, persona-based personalization. `acc` maps to the index of the
  // matching category in the "Where vision meets opportunity" accordion.
  const personas = [
    {
      key: 'rights-holders', acc: 0,
      label: 'Right Holders', short: 'Teams · Leagues · Federations',
      titleWhite: 'Capital, partners & growth for', titleGold: 'rights holders.',
      intro: 'Meet the investors, brands and platforms actively looking to back the next era of teams, leagues and federations.',
      reasons: [
        ['Meet capital that is deploying', 'Sit down with private equity, sovereign funds and family offices actively allocating to sport.'],
        ['Find your next sponsor', 'Curated introductions to brands and agencies looking for rights to activate against.'],
        ['Benchmark new revenue models', 'Direct-to-fan, data and media rights, see what is actually working from peers across the globe.'],
      ],
    },
    {
      key: 'brands', acc: 1,
      label: 'Brands', short: 'Sponsors · Marketers',
      titleWhite: 'The right rights, and partners to activate them, ', titleGold: 'for brands.',
      intro: 'Find the properties, agencies and technology that turn sponsorship spend into measurable fan engagement.',
      reasons: [
        ['Scout sponsorship inventory', 'Meet rights holders across leagues, teams and federations under one roof.'],
        ['Prove the ROI', 'Sessions and case studies on attribution, attention and what actually moves the needle.'],
        ['Build your activation stack', 'Connect with agencies, creators and platforms to bring campaigns to life.'],
      ],
    },
    {
      key: 'investment', acc: 2,
      label: 'Investment & Advisory', short: 'Investors · Advisors',
      titleWhite: 'Deal flow and the next wave of value', titleGold: 'for investors.',
      intro: 'Source opportunities, pressure-test theses and meet the operators shaping valuations across the sports economy.',
      reasons: [
        ['Source proprietary deal flow', 'Rights holders, startups and operators raising and open to capital.'],
        ['Sharpen your thesis', 'Five forward-looking themes on where value is migrating next in sport.'],
        ['Meet co-investors & LPs', 'The capital community of sport, gathered in one room.'],
      ],
    },
    {
      key: 'agencies', acc: 3,
      label: 'Agencies', short: 'Creative · Media · Sponsorship',
      titleWhite: 'Win mandates and partners', titleGold: 'for agencies.',
      intro: 'Meet the brands and rights holders commissioning the partnerships and campaigns that move the industry.',
      reasons: [
        ['Meet brands with budgets', 'Decision-makers looking for partners to design and run their programs.'],
        ['Land new rights-holder clients', 'Teams and leagues seeking commercial and creative expertise.'],
        ['Stay ahead of the brief', 'See what CMOs and rights holders will be asking for next.'],
      ],
    },
    {
      key: 'tech', acc: 4,
      label: 'Startups', short: 'Tech · Data · Platforms',
      titleWhite: 'Buyers, partners and capital', titleGold: 'for tech.',
      intro: 'Get in front of the rights holders, brands and investors deciding which platforms define the next era of sport.',
      reasons: [
        ['Reach real buyers', 'Leagues, teams and brands actively evaluating new platforms and data products.'],
        ['Pitch on the main stage', 'The Draft, compete with 200+ startups for visibility and capital.'],
        ['Find your investors', 'VCs and strategics scouting the next infrastructure of sport.'],
      ],
    },
    {
      key: 'media', acc: 5,
      label: 'Media', short: 'Broadcast · Streaming · Content',
      titleWhite: 'Rights, audiences and the story', titleGold: 'for media.',
      intro: 'Connect with the rights holders, platforms and brands defining how sport gets distributed and told.',
      reasons: [
        ['Secure the next rights', 'Meet leagues and federations rethinking distribution and direct-to-fan.'],
        ['Build models that hold', 'Sessions on margins, retention and winning the second screen.'],
        ['Partner on content', 'Brands, creators and platforms looking to co-create the story.'],
      ],
    },
  ];

  // Home §5 "Be part of SportGen this May", solid-fill cards (Raise-style: square photo on top, CTA below)
  const homeFeatures = [
    { grid: [
        'assets/halftime-crowd.jpg', 'assets/closing-golden.jpg', 'assets/vip-frontrow.jpg',
        'assets/closing-talk.jpg', 'assets/halftime-eiffel.jpg', 'assets/vip-ambiance.jpg',
        'assets/vip-networking.jpg', 'assets/closing-crowd.jpg', 'assets/halftime-talk.jpg',
      ], logo: 'assets/sgn-wordmark.png', title: '[SGN] Summit', body: 'A full week of sport, business and unforgettable moments across Paris.', cta: 'About [SGN]', href: '#/side-events' },
    { photo: 'assets/photos/gala-handshake.png', title: 'The SportGen Gala', body: 'A private evening with speakers and industry leaders in Paris.', cta: 'About the VIP dinner', href: '#/vip-dinner' },
    { photo: 'assets/sgn-investment-summit-concorde.jpg', logoOverlay: 'assets/brand/sgn-investment-summit-white.png', title: 'SGN Invest', body: 'Where the capital shaping the business of sport gets deployed.', cta: 'About [SGN] Invest', href: 'sis.html' },
    { photo: CDN + 'Co52dENJq9zURuHVWsaT9wf0Vi4.jpg', title: 'Speakers', body: 'Join 100+ world-class voices redefining the business of sport.', cta: 'About the Line up', href: '#/speakers' },
    { photo: 'assets/photos/the-draft-stage.jpg', title: 'The Draft', body: 'Where 200+ startups compete to pitch the future of sport.', cta: 'About the start up competition', href: '#/startup-competition' },
  ];

  const tracks = [
    { name: 'Capital & Influence', img: CDN + 'BdvImhqqpS5xKMewIaIVQTRFy0.jpg', tagline: "Who's Really Running Sports Now", body: 'Sport has never attracted more capital, and capital has never demanded more in return. Institutional investors, private equity firms, sovereign funds, and a new generation of athletes are reshaping governance, strategy, and long-term value creation. The levers of power are shifting, the question is who is pulling them.', topics: [
      { q: 'Private Equity in Sport', a: 'How PE and institutional capital are reshaping ownership, governance, and the way clubs and leagues are run.' },
      { q: 'Sovereign & State Investment', a: 'The geopolitics of sport and the new wave of state-backed funding redrawing the global map.' },
      { q: 'Athletes as Investors', a: 'A new generation of athletes turning influence into equity, ownership stakes, and operating power.' },
      { q: 'Valuations & Exits', a: "What franchises, leagues, and media rights are really worth, and who's buying at the top of the cycle." },
    ] },
    { name: 'The Attention Stack', img: CDN + 'F7FzrbBTjcQ6YqN7dzTW4ZBX24.jpg', tagline: 'Navigating Media, Technology, and What Actually Moves the Needle', body: 'AI, streaming, direct-to-fan platforms: the tools available to sport have never been more powerful or more overwhelming. Technology is reshaping every part of the media value chain, but not every innovation delivers. The real conversation is about what to invest in, what to ignore, and how to build for an audience with more choices than ever.', topics: [
      { q: 'AI in Production & Personalization', a: 'Where artificial intelligence genuinely moves the needle across production, personalization, and operations.' },
      { q: 'Streaming & Media Rights', a: 'Building direct-to-fan and streaming models that actually hold an audience and a margin.' },
      { q: 'Creators & the Second Screen', a: 'Capturing attention where fans really spend their time, beyond the broadcast window.' },
      { q: 'Measuring What Matters', a: 'Cutting through the hype to the metrics that should drive investment decisions.' },
    ] },
    { name: "Women's Sport: Building the Future Now", img: CDN + 'kRXx3Wp2Vc6PrS52quVwaCChZU.jpg', tagline: 'Why Women\u2019s Sport Is the Play Nobody Can Afford to Miss', body: 'The window is open, but not forever. Audiences are growing. Media rights are still catching up. The commercial infrastructure around women\u2019s sport is still being built. Who builds it, and how fast, will define the next decade.', topics: [
      { q: 'Building the Commercial Infrastructure', a: 'Standing up the sponsorship, media, and operating models from the ground up.' },
      { q: 'Media Rights & Visibility', a: 'Closing the gap between fast-growing audiences and the rights value that should follow.' },
      { q: 'Investing Early', a: 'Why the next decade of returns is being decided by who moves now.' },
      { q: 'Building Lasting Fandom', a: 'Turning momentum into durable, monetizable communities rather than a passing moment.' },
    ] },
    { name: 'From Visibility to Value', img: CDN + '6BGdavZd7RRphp5LkXDSCgZXds.jpg', tagline: 'How Sports Sponsorship is Being Redefined', body: 'The rules of partnership are being rewritten. Brands want measurable impact. Rights holders want long-term relevance. Creators want creative control. When everyone wants more from a deal, the old models start to crack, and the most interesting partnerships are being built on entirely new terms.', topics: [
      { q: 'From Logos to Measurable Impact', a: 'Moving partnerships from exposure and placement to proven, accountable ROI.' },
      { q: 'Creator-Led Partnerships', a: 'What changes when creative control shifts to the talent and the audience they own.' },
      { q: 'Long-Term Relevance', a: 'What rights holders owe partners beyond reach, and how relationships are kept alive.' },
      { q: 'New Deal Structures', a: 'The models quietly replacing the traditional sponsorship playbook.' },
    ] },
    { name: 'Rewriting The Game', img: CDN + '5e1BhyCxqGtKrBP0BqthxARQ8.jpg', tagline: 'Leagues, Fans, and the Pressure to Evolve', body: 'New formats are finding audiences that traditional competitions struggle to retain. Emerging leagues are moving fast, while established sports face growing pressure to rethink their rules, media strategies, and what fans actually want in a fragmented digital world. Evolution is no longer optional.', topics: [
      { q: 'New Formats, New Audiences', a: 'How emerging competitions win the fans that incumbent formats struggle to keep.' },
      { q: 'Reinventing the Fan Experience', a: 'Rethinking what fans actually want in a fragmented, on-demand world.' },
      { q: 'Pressure on the Incumbents', a: 'Why established sports must rethink their rules, calendars, and media strategies.' },
      { q: 'Speed as Strategy', a: 'Moving fast and experimenting when evolution is no longer optional.' },
    ] },
  ];

  const startupSteps = [    { label: 'Applications Open', desc: 'Over 100 promising startups apply to compete', date: 'FEB 18TH', short: 'Feb 18', line: 271 },
    { label: 'Submissions Closed', desc: 'The application window shuts. No more entries after this date', date: 'APRIL 24TH', short: 'Apr 24', line: 199 },
    { label: 'Top 20 Selection', desc: 'Our expert jury shortlists the most promising ventures', date: 'MAY 1ST', short: 'May 1', line: 263 },
    { label: 'Finalists announced', desc: 'The 10 best startups are invited to pitch live', date: 'MAY 6TH', short: 'May 6', line: 154 },
    { label: 'Winner Announcement', desc: 'The future of sport unfolds at SportGen', date: 'MAY 28TH', short: 'May 28', line: 272 },
  ];

  // Startup Competition page (live assets, hotlinked)
  const startup = {
    heroBg: 'assets/startup-hero.png',
    cards: [
      { title: 'Meet your next  client', photo: CDN + 't4dVvEId1PV0qnMajtfRbF5rvi8.jpg', items: ['1,500+ sports industry leaders', 'Side events and private gatherings', 'Networking Lounge & App'] },
      { title: 'Secure international funding', photo: CDN + 'grjj04CQv3NcrpZa86oFpvIHN0Q.jpg', items: ['200+ active investors', 'Curated 1:1 investor meetings', 'Leading venture capital funds'] },
      { title: 'Get industry  visibility', photo: CDN + 'p5sFQKUigSzrEY5t0wLlOKzWcU.jpg', items: ['Apply to The Draft', 'Pitch on the Main Stage', 'Showcase your solution'] },
    ],
    activitiesBg: CDN + 'nJpxwFSp4i2lTdIZvNHirUBaU.jpg',
    activities: [
      { label: 'Meet your Next Customer', body: 'Exhibit your solution, engage with industry decision-makers, and turn visibility into new customer opportunities.' },
      { label: 'Exhibition Booths', body: 'Showcase your solution in our Startup Area and meet decision-makers. Increase your visibility with an Official Partner package.', cta: 'Book a Call', href: '#/get-in-touch' },
      { label: 'Apply to The Draft and Pitch on the Main Stage', body: 'If your project is among the most promising in sport tech, health, or wellness, secure your spot among the 10 finalists and get ready to gain unmatched industry visibility.', cta: 'Apply to The Draft', href: '#/get-in-touch' },
      { label: 'Side Events', body: 'Join innovation and startup-focused side events to grow faster and smarter. Connect with industry professionals and meet your next clients.', cta: 'SGN Week', href: '#/side-events' },
      { label: 'Investor Meetings', body: 'Meet international investors through scheduled meetings and dedicated time slots focused on fundraising discussions.' },
    ],
    whereImgs: [CDN + 'bYVI6HO8cxnNKsF6MAd1FtWec.jpg', CDN + 'MDiTNGMBJZBZQcBsTMd047WQpUw.jpg'],
    sponsors: ['HZaR7L01XlCApAMTJDGF1DhqV18.png', 'sSilUxow0NqHJiOo0YcObWU3Y.png', 'x0SM7QgrWqKw8Ke26CNm2pxW88.png', 'GoGTAGqQoWm649gzHwtjIvBkg.png', 'sCJFTrXmUNlz0wH9CVvBT2B1g.png', 'k8LcAMwlh3iR4AQaLJiJhVcjBU.png'].map((f) => CDN + f),
  };

  const startupWinners = [
    { rank: 2, name: 'Eóin Tuohy', role: 'Founder & CEO, Sport Impact Technologies', photo: 'assets/winners/eoin-tuohy.jpg', logo: 'assets/winners/sport-impact-logo.png' },
    { rank: 1, name: 'Karim Fawaz', role: 'Founder, Playback', photo: 'assets/winners/karim-fawaz.jpg', logo: 'assets/winners/playback-logo.png' },
    { rank: 3, name: 'Robin Champseix', role: 'CEO, Billy', photo: 'assets/winners/robin-champseix.jpg', logo: 'assets/winners/billy-logo.png' },
  ];

  const startupJury = [
    { name: 'Pieter Lammens', role: 'Manager, PSG Labs', photo: 'assets/jury/pieter-lammens.jpg', logo: 'assets/jury/psg-labs-logo.png' },
    { name: 'Kevin Savina', role: 'Principal Partner Lead, Media & Entertainment, AWS', photo: 'assets/jury/kevin-savina.jpg', logo: 'assets/jury/aws-logo.png' },
    { name: 'Rohn Malhotra', role: 'Founder, SportsTechX', photo: 'assets/jury/rohn-malhotra.jpg', logo: 'assets/jury/sportstechx-logo.png', pos: 'center 22%' },
    { name: 'BNP Paribas', logo: 'assets/jury/bnp-paribas-logo.png', pair: [
      { name: 'Islem Laid', role: 'Ambassadrice Sport BCEF Entreprise, BNP Paribas', photo: 'assets/jury/islem-laid.jpg' },
      { name: 'Sébastien Moisan', role: 'Chargé d\u2019Affaires Entreprises Innovation, BNP Paribas', photo: 'assets/jury/sebastien-moisan.jpg' },
    ] },
  ];

  const startupFaq = [
    { q: 'Who can apply ?', a: 'To be eligible for The Draft, startups must have raised less than $5 million in total funding and have been operating for fewer than 4 years. Companies must operate in Sport Tech, Health, or Wellness.' },
    { q: 'How are finalists selected ?', a: 'A panel of investors and industry leaders reviews all submissions. The Top 20 are selected by May 1st, with 10 finalists announced on May 6th to pitch live on the Main Stage.' },
    { q: 'What are the key dates ?', a: 'Applications open Feb 18th, submissions close Apr 24th, Top 20 by May 1st, finalists May 6th, winner announced May 28th.' },
    { q: 'Is there a fee ?', a: 'Applying to The Draft is free. Selected startups attend with a Startup ticket, which includes Main Stage access, the Networking Lounge and all food & drinks.' },
    { q: 'What\u2019s at stake?', a: 'Exposure to 1,500+ sports industry leaders and 200+ active investors, a Main Stage pitch slot, and the chance to be named the SportGen Draft winner.' },
  ];

  const interests = ['Technology', 'Women Sport', 'Investment', 'Advisory', 'Innovation', 'Partnerships', 'Fan Engagement', 'Sport'];

  // Agenda, all 4 stage/day tabs, extracted 1:1 from the live site's CMS collections
  // (Talks Main Stage + Talks Elysee Stage), speaker photos/roles joined from the Speakers collection.
  const agendaLive = {
    'main-27': [
    { time: "09:00 - 09:10", title: "Opening Speeches", guests: [
      { name: "Paul Perrin", role: "Co-Founder", org: "SPORT[GEN] Summit", photo: "https://framerusercontent.com/images/CEJYyEtur2dnJ0BZedpZFaY0.png" },
      { name: "Aurélien Linÿer", role: "Co-Founder", org: "SPORT[GEN] Summit", photo: "https://framerusercontent.com/images/IuCCHjO1TuytCBgo4vE8Qif668.png" },
      { name: "Vincent-Baptiste Closon", role: "Global Director Partnerships, Events & Sponsorship", org: "BNP Paribas", photo: "https://framerusercontent.com/images/G0DgfGsNgiIDeGgtfs2SRlPq2is.png" },
    ] },
    { time: "09:10 - 09:40", title: "What the Olympic moment means for France", desc: "Legacy, investment, and the opportunity of hosting twice in six years", guests: [
      { name: "Amélie Oudéa-Castéra", role: "President", org: "French National Olympic Committee", photo: "https://framerusercontent.com/images/EIQBimfHqqBhiB2hYGc7NFJZaCw.png" },
      { name: "Edgar Grospiron", role: "President", org: "OCOG French Alps 2030", photo: "https://framerusercontent.com/images/SWzegi8o5okeIp3xgI5OufypW4.png" },
      { name: "Mathieu Besson", role: "Managing Director, France", org: "Parresia", photo: "https://framerusercontent.com/images/YGFzzoEXrpr2aqsVB92WVSskaU.png", mod: true },
    ] },
    { time: "10:00 - 10:20", title: "Playing to win, on and off the court", desc: "How athletes are changing the way deals get done", guests: [
      { name: "Caroline Garcia", role: "Co-Founder", org: "Tennis Insider Club", photo: "https://framerusercontent.com/images/oOu39W7dBxb3Cu4ngc3VXjJ18.png" },
      { name: "Pedro Félix da Costa", role: "Chief Commercial Officer", org: "APEX", photo: "https://framerusercontent.com/images/pptQFejMtbINOhmt6NktRcf7VZI.png" },
    ] },
    { time: "10:20 - 10:50", title: "Format first", desc: "How emerging leagues are rebuilding the relationship with fans", guests: [
      { name: "Charlie Dewhurst", role: "Chief Commercial Officer", org: "SailGP", photo: "https://framerusercontent.com/images/kJMwAsEKurlQrgAXA0AFqOwqvSs.jpg" },
      { name: "Baptiste Kern", role: "Chief Operating Officer", org: "UTS", photo: "https://framerusercontent.com/images/gPV26XCeBFiFoDKz4bXr3B0N1W4.png" },
      { name: "Mariano Otero", role: "SVP, Business Development", org: "Fever", photo: "https://framerusercontent.com/images/YdMzGv4lQzIXAeobXaqukb69Ic.png" },
      { name: "Paul Rossi", role: "CEO", org: "SportBusiness", photo: "https://framerusercontent.com/images/EA65kVDaLzKMrLeWLKKndjRsEA.jpg", mod: true },
    ] },
    { time: "10:50 - 11:10", title: "Scaling a global sport", desc: "Volleyball world’s growth story", guests: [
      { name: "Ugo Valensi", role: "CEO", org: "Volleyball World", photo: "https://framerusercontent.com/images/ppqSiw0yy54bFBHWNFHO8wkCn0c.jpeg" },
      { name: "David Dellea", role: "Partner", org: "Altman Solon", photo: "https://framerusercontent.com/images/22lqhNpDCVAxaXxmdKQqjfzOIY.png", mod: true },
    ] },
    { time: "11:10 - 11:40", title: "Moving from proof of concept to real impact", desc: "What is actually working with AI in sport, and what isn't (yet)", guests: [
      { name: "Steve Carter", role: "CEO", org: "Bolt6", photo: "https://framerusercontent.com/images/oBs9Ew8nb7JQqrSkXkaxEvK0wAk.jpeg" },
      { name: "Chris Hume", role: "Director", org: "Champion Data", photo: "https://framerusercontent.com/images/mWInzwhlffIHNRTtXjN2XfnH1g.jpg" },
      { name: "Charles Fremont", role: "Senior Innovation Hub Manager", org: "UEFA", photo: "https://framerusercontent.com/images/57QrK0NlU2wid8StS4Vd8NAAMA.jpg" },
      { name: "Paul Devlin", role: "Sub-Industry Leader", org: "Amazon Web Services", photo: "https://framerusercontent.com/images/jhxQig1VSxf41EfZdVDKMLmfo.png", mod: true },
    ] },
    { time: "11:40 - 12:00", title: "What's next for professional tennis?", desc: "ATP Tour CEO on strategy, opportunity and the long-term vision for the sport", guests: [
      { name: "Eno Polo", role: "CEO", org: "ATP Tour", photo: "https://framerusercontent.com/images/9XsFaQ5U2Y1j2GAnxBzSig6ER0.jpg" },
      { name: "Francesca Tognoni", role: "Senior Brands & Sponsorship Manager", org: "Haier Europe", photo: "https://framerusercontent.com/images/6OJSIP04HRE50T4OFtczZbJQS9U.png" },
      { name: "Aurélien Linÿer", role: "Co-Founder", org: "SPORT[GEN] Summit", photo: "https://framerusercontent.com/images/IuCCHjO1TuytCBgo4vE8Qif668.png", mod: true },
    ] },
    { time: "12:00 - 12:30", title: "The Roland-Garros flywheel", desc: "How global ambition and local innovation feed each other", guests: [
      { name: "Jefferson Plentz", role: "CEO & Founder", org: "StarBro Sport Tech", photo: "https://framerusercontent.com/images/fwC3DkHHZZ5qhlVrvmEHTunqsJ4.png" },
      { name: "Eero Kuusi", role: "CEO & Founder", org: "Zenniz", photo: "https://framerusercontent.com/images/zrGBADWPrfbdxCco50eXhfivvWA.jpg" },
      { name: "Aymeric Labaste", role: "Head of International Development", org: "Roland-Garros", photo: "https://framerusercontent.com/images/hGtACndj3JcYH4Ow5IqRSnM1J8.jpg" },
      { name: "Vincent Hillion", role: "", org: "SPORT[GEN] Summit", photo: "https://framerusercontent.com/images/ulkBhMHzXZdTfvZvLLj4y7gToQ.png", mod: true },
    ] },
    { time: "12:30 - 12:50", title: "Fireside with David Coulthard", desc: "From the track to the boardroom", guests: [
      { name: "David Coulthard", role: "Company Director", org: "Velocity Experience", photo: "https://framerusercontent.com/images/8FFPADXXkrEbuOJLKq7wJAbmvo.webp" },
      { name: "Paul Perrin", role: "Co-Founder", org: "SPORT[GEN] Summit", photo: "https://framerusercontent.com/images/CEJYyEtur2dnJ0BZedpZFaY0.png", mod: true },
    ] },
    { time: "12:50 - 13:10", title: "Touchdown Paris", desc: "Inside the NFL's European expansion: the strategy and the challenges", guests: [
      { name: "Brett Gosper", role: "Head of Europe & Asia-Pacific", org: "National Football League", photo: "https://framerusercontent.com/images/Pek3pM4e4UrWakS9WQRdf5uT0w.png" },
      { name: "Benjamin Morel", role: "Founder & President", org: "M2C Sports Advisory", photo: "https://framerusercontent.com/images/aY2MoCYu0KUmuTjZYsIvlH3rAo.png", mod: true },
    ] },
    { time: "13:10 - 13:40", title: "European football’s next chapter", desc: "How European leagues are building for global relevance", guests: [
      { name: "Michele Ciccarese", role: "Marketing & Commercial Director", org: "Lega Serie A", photo: "https://framerusercontent.com/images/Zoc8ZkIgRaUqyaKLPxNmNeiC6o.png" },
      { name: "Luca Baldanza", role: "Founding Partner", org: "Iris Sport Media", photo: "https://framerusercontent.com/images/q8utcKnFUXH5bqsYEgq1Gn09s.png" },
      { name: "Gianluca Santaniello", role: "Strategy Director", org: "Olympique de Marseille", photo: "https://framerusercontent.com/images/hLrJm21H7lfENFhc2nXIkx9DUHo.png" },
      { name: "Lorenzo Vitali", role: "Co-Sector Head Media, Sport", org: "DLA Piper", photo: "https://framerusercontent.com/images/dP6HMVCq5KZSnsmiJ1wmIFwng8.png" },
      { name: "Mathias Kuhn", role: "Lawyer", org: "DLA Piper", photo: "https://framerusercontent.com/images/FqjietMGOpqg7e2yIVfRYiOLZ7k.png", mod: true },
    ] },
    { time: "13:40 - 14:00", title: "From coach to founder", desc: "Building stars, brands and leagues", guests: [
      { name: "Patrick Mouratoglou", role: "Founder", org: "UTS", photo: "https://framerusercontent.com/images/U2myLjMqe8qJVdTCmpTbwBphPw.jpg" },
      { name: "Jules Stimpfling", role: "Co-Founder", org: "Le Crayon Groupe", photo: "https://framerusercontent.com/images/dQlJz7VHL99hd0OfOUrNlxCwfg.jpg", mod: true },
    ] },
    { time: "14:00 - 14:30", title: "Smart money in sport", desc: "VCs on the sectors, the deal flow and the honest investment thesis", guests: [
      { name: "Kushaan Ahuja", role: "Partner", org: "Will Ventures", photo: "https://framerusercontent.com/images/Ak1uO3FhCGapUbhnBihxUKzG8YM.webp" },
      { name: "Arjun Kapur", role: "Vice President", org: "Left Lane Capital", photo: "https://framerusercontent.com/images/mEcHvHS8jqIDhs6t2oDDi5KMsU.jpg" },
      { name: "Charlie Stebbings", role: "Head of Sport", org: "20VC", photo: "https://framerusercontent.com/images/yxpiucim8tjbGyOjvqVAjwdH4.jpg" },
      { name: "Malcolm Lemmons", role: "Founder", org: "Vetted Sports", photo: "https://framerusercontent.com/images/uzI5otMpDM3bKzdpNGe9cO9V3lA.jpg", mod: true },
    ] },
    { time: "14:30 - 15:00", title: "Reinventing the future of sport", desc: "How technology, data and AI are transforming tennis", guests: [
      { name: "Teodora Ivanova-Limon", role: "Chief Business Officer", org: "WTA Ventures", photo: "https://framerusercontent.com/images/jafSqAyUG6QlnNpBsMDcJ5NdMk.png" },
      { name: "Bob Markham", role: "President, EMEA", org: "Accenture Song", photo: "https://framerusercontent.com/images/pTypHmfhSQquS9hs9uzGdWgTTDY.png" },
      { name: "Christopher Carroll", role: "Managing Partner", org: "Clubhouse Ventures", photo: "https://framerusercontent.com/images/lM8P1YiQOVCPxBSg4YY1uLA077A.png", mod: true },
    ] },
    { time: "15:00 - 15:30", title: "Champion meets challenger", desc: "Lessons on sponsorship and brand evolution across the maturity curve", guests: [
      { name: "Richard Heaselgrave", role: "Chief Revenue Officer", org: "PSG", photo: "https://framerusercontent.com/images/4Bd8adKnpoUpgrn3B0Es5BvNGM.jpg" },
      { name: "Raquel Braun", role: "Chief Commercial Officer", org: "League One Volleyball", photo: "https://framerusercontent.com/images/5Ij0fyGOgmzd9wk2cD5C3DYLFE.png" },
      { name: "Charlie Dewhurst", role: "Chief Commercial Officer", org: "SailGP", photo: "https://framerusercontent.com/images/kJMwAsEKurlQrgAXA0AFqOwqvSs.jpg" },
      { name: "Matthew Glendinning", role: "European Sponsorship Editor", org: "SportBusiness Group", photo: "https://framerusercontent.com/images/dEYTugwd8WstQWhpQO3cBOnD4g.png", mod: true },
    ] },
    { time: "15:30 - 15:50", title: "France as Europe's sports investment hub", desc: "Bpifrance's vision for the next decade", guests: [
      { name: "Arnaud Caudoux", role: "Deputy CEO", org: "Bpifrance", photo: "https://framerusercontent.com/images/Zi6YmhlwG0FvUXZsEawbfa1BQws.png" },
      { name: "Sofiane El Majdoubi", role: "News Editor, Economy & Sports Business", org: "Linkedin", photo: "https://framerusercontent.com/images/I8z2Wn0Qq9QyydY95dS5FEOEL7s.png", mod: true },
    ] },
    { time: "15:50 - 16:20", title: "The women's sport investment window", desc: "How investors, brands and rights holders are pricing the new economics of women's sport", guests: [
      { name: "Bex Smith", role: "CEO & Founder", org: "Crux Football", photo: "https://framerusercontent.com/images/cSUoLhNbaT5EgvvrrJdgyz5ss4.jpg" },
      { name: "Monica Biagiotti", role: "EVP, Global Consumer Mrktg & Sponsorships", org: "Mastercard", photo: "https://framerusercontent.com/images/aAIUB9U0FIxO8pozAKsLtFEk.jpg" },
      { name: "Kerstin Lutz", role: "CEO", org: "Billie Jean King Cup", photo: "https://framerusercontent.com/images/MCyQPT581a3eq1hMmXTuQ2sDxVw.png" },
      { name: "Adriana Crovetto", role: "Investor", org: "Gamma Waves Partners", photo: "https://framerusercontent.com/images/I8mhyySULZGm6fXG4capFil7qaA.jpg", mod: true },
    ] },
    { time: "16:20 - 16:50", title: "The attention game", desc: "How to win the next generation of fans through original content and storytelling", guests: [
      { name: "Victorien Tixier", role: "CEO & Founder", org: "Scoreplay", photo: "https://framerusercontent.com/images/ghLemAq0cDaYEkDESEH9aY18Ec.png" },
      { name: "Kahlen Macaulay", role: "Head of Sports & Media Partnerships", org: "Snap Inc.", photo: "https://framerusercontent.com/images/jg0QsUFlvdSOAdh1eGjgSiVHg.png" },
      { name: "Cyprien Castanedo", role: "Head of Project Platform & Innovation", org: "LFP Media", photo: null },
      { name: "Benjamin Abitbol", role: "Board Member", org: "Unibet Rose Rockets", photo: "https://framerusercontent.com/images/Fz4ZjKFNtXipioCSodsZpgLKYmQ.png", mod: true },
    ] },
    { time: "16:50 - 17:20", title: "Beyond the patch", desc: "Building global brands through sport & technology", guests: [
      { name: "Brandon James", role: "SVP, Strategic Growth & Deputy General Counsel", org: "San Antonio Spurs", photo: "https://framerusercontent.com/images/haSwDsC3jNW9b77bGMgo55o3D4.png" },
      { name: "Ariel Wengroff", role: "EVP, Global Marketing & Communications", org: "Ledger", photo: "https://framerusercontent.com/images/XrabIKsJP1I5VnDlhaKfCbV0ess.png" },
      { name: "Paul Perrin", role: "Co-Founder", org: "SPORT[GEN] Summit", photo: "https://framerusercontent.com/images/CEJYyEtur2dnJ0BZedpZFaY0.png", mod: true },
    ] }
    ],
    'main-28': [
    { time: "09:00 - 09:30", title: "The rise of outdoor sports", desc: "The growth story, brand opportunity and authenticity challenge", guests: [
      { name: "Florian Lamblin", role: "CEO", org: "UTMB International", photo: "https://framerusercontent.com/images/dCaPR9qH5sXnNOVCEhrbJ9pxzrY.jpeg" },
      { name: "Nicolas Burger", role: "CEO", org: "Alltricks", photo: "https://framerusercontent.com/images/bmCFsSdESmMfodkKOJPyRvhDUL4.png" },
      { name: "Diane Marie-Hardy", role: "Account Strategist", org: "Google", photo: "https://framerusercontent.com/images/80xZl97NuEAGxJGRDcGjnDvpUE.png", mod: true },
    ] },
    { time: "09:30 - 10:00", title: "The future of sports broadcasting", desc: "New screens, new stories, new rules", guests: [
      { name: "Laurent-Eric Le Lay", role: "Sports Director", org: "France Télévisions", photo: "https://framerusercontent.com/images/jcrXXVghu7vXURhrmXaOWy1coc.webp" },
      { name: "Jérôme Parmentier", role: "Vice President, Media Rights &\nContent Partnerships", org: "International Olympic Committee", photo: "https://framerusercontent.com/images/K3K9uV0jbgEcF2adMHbmVrRj8.png" },
      { name: "Sunil Patel", role: "CEO ", org: "Whisper Group", photo: "https://framerusercontent.com/images/mqKNKc4P6pE46imawF9dGu0Oh8.jpg" },
      { name: "Mathieu Besson", role: "Managing Director, France", org: "Parresia", photo: "https://framerusercontent.com/images/YGFzzoEXrpr2aqsVB92WVSskaU.png", mod: true },
    ] },
    { time: "10:00 - 10:20", title: "Structuring global motorsport", desc: "Governance and growth", guests: [
      { name: "Valerio Iachizzi", role: "Secretary General for Sport", org: "FIA", photo: "https://framerusercontent.com/images/GWZNWQOS1CpXY6v1v99AVhcpQys.png" },
      { name: "Samuel Tamba", role: "Founder & CEO", org: "AxeOne", photo: "https://framerusercontent.com/images/4Wa0dEkyzt8Fhv8AhlVR3eRykA.png", mod: true },
    ] },
    { time: "10:20 - 10:40", title: "El Millonario", desc: "The blueprint of a south american giant", guests: [
      { name: "David Trezeguet", role: "Euro 2000 Winner", org: "ex-Footballer", photo: "https://framerusercontent.com/images/h3h0uiAzr7dhms3AEifc3cgOI.png" },
      { name: "Matias Patanian", role: "Former Vice President", org: "River Plate", photo: "https://framerusercontent.com/images/uCYoiXTFZwFqdMkU2AGgVSWtcxQ.png" },
      { name: "Jules Derrien", role: "Strategic Partnerships Project Manager", org: "BNP Paribas", photo: "https://framerusercontent.com/images/014lrZe7Mc11a7vZ4cH0Gsx0uX8.png", mod: true },
    ] },
    { time: "10:40 - 11:00", title: "The new business of sport hospitality", desc: "From premium experiences to talent pipelines", guests: [
      { name: "Matthew Williams", role: "Program Manager, Sports", org: "Les Roches", photo: "https://framerusercontent.com/images/xogkKvJplFY9aIiVdEyA0NdU.jpg" },
      { name: "Paul Rossi", role: "CEO", org: "SportBusiness", photo: "https://framerusercontent.com/images/EA65kVDaLzKMrLeWLKKndjRsEA.jpg", mod: true },
    ] },
    { time: "11:00 - 12:00", title: "The Draft", desc: "Startup competition final", guests: [
      { name: "Kevin Savina", role: "Principal Partner Lead, MEGS", org: "Amazon Web Services", photo: "https://framerusercontent.com/images/t4ubpfhNDKEMKMG4toxmmyGKg.png" },
      { name: "Pieter Lammens", role: "Manager", org: "PSG Labs", photo: "https://framerusercontent.com/images/yB9IKQ6OykIkc9vhYnaRPDc8FZI.jpg" },
      { name: "Rohn Malhotra", role: "Founder", org: "SportsTechX", photo: "https://framerusercontent.com/images/08zclNSUpg7XYqHOucwfnyrPk.png" },
      { name: "Islem Laid", role: "BCEF Entreprise Sport Ambassador", org: "BNP Paribas", photo: "https://framerusercontent.com/images/ng2zpbRZPbD6FIvI0oGi1t24pZA.png" },
    ] },
    { time: "12:00 - 12:20", title: "Fireside with Marc Lasry", guests: [
      { name: "Marc Lasry", role: "Co-Founder, Chairman and CEO", org: "Avenue Capital", photo: "https://framerusercontent.com/images/cYNJZ7PeuRme6ygWI2V7HJT3fU.png" },
      { name: "Aurélien Linÿer", role: "Co-Founder", org: "SPORT[GEN] Summit", photo: "https://framerusercontent.com/images/IuCCHjO1TuytCBgo4vE8Qif668.png", mod: true },
    ] },
    { time: "12:20 - 12:50", title: "Building a brand–athlete partnership", desc: "How to structure, activate and measure deals where everyone wins", guests: [
      { name: "Dominic Thiem", role: "US Open Winner", org: "Entrepreneur", photo: "https://framerusercontent.com/images/FZRS6IAVUKCc3QsPrmDkNl0o8.jpeg" },
      { name: "Dominik Beier", role: "Chief Commercial Officer", org: "Bitpanda", photo: "https://framerusercontent.com/images/LHDDn1bOuMqzNbKgTwG9bbs.jpg" },
      { name: "Christopher Carroll", role: "Managing Partner", org: "Clubhouse Ventures", photo: "https://framerusercontent.com/images/lM8P1YiQOVCPxBSg4YY1uLA077A.png", mod: true },
    ] },
    { time: "12:50 - 13:20", title: "Private capital in sport", desc: "What value creation really means, and where the market goes next", guests: [
      { name: "Adnan Khalef", role: "Managing Director", org: "The Carlyle Group", photo: "https://framerusercontent.com/images/NNxaTxwoAuvSV6BqobSwCmgKae8.jpeg" },
      { name: "Mofses Kechichian", role: "TRAIL Capital", org: "Managing Director ", photo: "https://framerusercontent.com/images/OlxkarHVwcGX5MzaAMwhzbH8RmE.png" },
      { name: "Paolo Della Rovere", role: "Morgan Stanley", org: "Managing Director ", photo: "https://framerusercontent.com/images/pdvLJbsdJnsLkLnZcQRwHa8edfM.png" },
      { name: "Samuel Agini", role: "Sports Business Correspondent", org: "Financial Times", photo: "https://framerusercontent.com/images/Q1N9eWUQnwQsfjufm0ybIhlmnY.png", mod: true },
    ] },
    { time: "13:20 - 13:40", title: "New horizons for global cricket", desc: "The future of the world's second most watched sport", guests: [
      { name: "Sanjog Gupta", role: "CEO", org: "International Cricket Council", photo: "https://framerusercontent.com/images/KBCeAisvKUDV6rggLYayhnyVQJw.png" },
      { name: "Hanu Trivedi", role: "", org: "SPORT[GEN] Summit", photo: "https://framerusercontent.com/images/nmpf0P3riObVc6WdQBJ5r4YAE4w.png", mod: true },
    ] },
    { time: "13:40 - 14:00", title: "The blind spot of Private Equity", desc: "Tackling the mid-market in European sports", guests: [
      { name: "António Caçorino", role: "CEO", org: "APEX", photo: "https://framerusercontent.com/images/xV2GmsqRh00j1SfbvgUG9AM2Lsk.jpg" },
      { name: "Stéphane Bénichou", role: "CEO", org: "InTheBoardroom", photo: "https://framerusercontent.com/images/awVro1YhuwJ9Ek1KB0dv18m2xs.jpeg", mod: true },
    ] },
    { time: "14:00 - 14:30", title: "Winning with AI", desc: "How IBM is redefining the sports experience", guests: [
      { name: "Kameryn Stanhouse", role: "Vice President, Global Sports & Entertainment Partnerships", org: "IBM", photo: "https://framerusercontent.com/images/26ZoG4VEcUOYVzvhkzjgbZHZY.jpg" },
      { name: "Alessandro Stornelli", role: "Fan Development Product Manager", org: "Scuderia Ferrari", photo: "https://framerusercontent.com/images/KG9MYn3ErMk5D85tMEj94AqEkw.png" },
      { name: "Paul Perrin", role: "Co-Founder", org: "SPORT[GEN] Summit", photo: "https://framerusercontent.com/images/CEJYyEtur2dnJ0BZedpZFaY0.png", mod: true },
    ] },
    { time: "14:30 - 15:00", title: "Meet the challenger", desc: "The next generation of players shaping sports finance", guests: [
      { name: "Kyang Yung", role: "Chief Investment Officer", org: "Gamma Waves Partners", photo: "https://framerusercontent.com/images/vQlgyWWl1GYwqMFikNA1Zn6kQ0.jpg" },
      { name: "Mark Wyatt", role: "Managing Director", org: "Alvarez & Marsal", photo: "https://framerusercontent.com/images/VAovWjs6XW5T844GcYQEAvoXDgQ.jpg" },
      { name: "Danny Menken", role: "Co-Founder & General Partner", org: "Athvance Capital", photo: "https://framerusercontent.com/images/h28fsVQ9NByiRnShu8MozaY9eM.png" },
    ] },
    { time: "15:00 - 15:30", title: "Accelerating progress", desc: "Women driving the future of motorsport", guests: [
      { name: "Burcu Çetinkaya", role: "Chair Women in Motorsport Commission", org: "FIA", photo: "https://framerusercontent.com/images/lEv8ZTFyaFMORtwezXBxpv3F1qk.png" },
      { name: "Doriane Pin", role: "Professional Driver", org: "Mercedes F1 Team", photo: "https://framerusercontent.com/images/6PIGO4V0mt1VVZpcIrWdgI1gCk.png" },
      { name: "Lisa Billard", role: "F1 Academy Driver", org: "Gatorade", photo: "https://framerusercontent.com/images/eGo5kWQBOx9lE9q1dffdG07Bias.png" },
      { name: "Samuel Tamba", role: "Founder & CEO", org: "AxeOne", photo: "https://framerusercontent.com/images/4Wa0dEkyzt8Fhv8AhlVR3eRykA.png", mod: true },
    ] },
    { time: "15:30 - 16:00", title: "The athlete enterprise, a new era of ownership", guests: [
      { name: "Jamie Horowitz", role: "CEO & Co-Founder", org: "Omaha Productions", photo: "https://framerusercontent.com/images/UU8iqJYYYS3sBqUFjd5G3biptBI.png" },
      { name: "Josh Pyatt", role: "Partner", org: "WTSL", photo: "https://framerusercontent.com/images/IXlNPPR7KsOukybMMhonI2BxwU.jpg" },
      { name: "Michael Meltzer", role: "Board Member", org: "ScorePlay", photo: "https://framerusercontent.com/images/5qbsXavPP34mqJKWdyvqzRWACE.png", mod: true },
    ] },
    { time: "16:00 - 16:20", title: "From Paris to the world, a global ambition", desc: "Inside PSG’s commercial strategy and brand evolution", guests: [
      { name: "Richard Heaselgrave", role: "Chief Revenue Officer", org: "PSG", photo: "https://framerusercontent.com/images/4Bd8adKnpoUpgrn3B0Es5BvNGM.jpg" },
      { name: "Paul Perrin", role: "Co-Founder", org: "SPORT[GEN] Summit", photo: "https://framerusercontent.com/images/CEJYyEtur2dnJ0BZedpZFaY0.png", mod: true },
    ] },
    { time: "16:20 - 16:50", title: "Signal shift", desc: "How rights holders and digital platforms are co-creating a new sports media model", guests: [
      { name: "Zack Weiner", role: "Co-Founder", org: "Overtime", photo: "https://framerusercontent.com/images/pO7mbetJjwEnUWLbs6qFXnk.png" },
      { name: "Kinda Ibrahim", role: "General Manager Operations Content, EMEA", org: "TikTok", photo: "https://framerusercontent.com/images/u3PIYEl1SuUbk8SZXhCP4897mI.png" },
      { name: "Andrew Walker", role: "SVP, Brand & Marketing", org: "ATP Tour", photo: "https://framerusercontent.com/images/Cnn1M0Jj4wXicKv41B2U8eHE4wc.png" },
      { name: "Dan Frommer", role: "The New Consumer", org: "Founder & Editor in Chief", photo: "https://framerusercontent.com/images/ZE8UXQ4GcpzPXcVBaQwDhyswU.png", mod: true },
    ] },
    { time: "16:50 - 17:10", title: "2026 and beyond", desc: "What's next for FIFA and the Beautiful Game", guests: [
      { name: "Romy Gai", role: "Chief Business Officer", org: "FIFA", photo: "https://framerusercontent.com/images/Tn2BKZ9BUwgeXkQxOwhAHwFjopQ.png" },
      { name: "Aurélien Linÿer", role: "Co-Founder", org: "SPORT[GEN] Summit", photo: "https://framerusercontent.com/images/IuCCHjO1TuytCBgo4vE8Qif668.png", mod: true },
    ] }
    ],
    'elysee-27': [
    { time: "10:00 - 10:30", title: "A monk’s guide to building AI for sports fans", guests: [
      { name: "Walter Gjergja", role: "Co-Founder", org: "Zing Coach", photo: "https://framerusercontent.com/images/e6WwOoEqjpCpGyUgosDmytT3yg.png" },
    ] },
    { time: "10:45 - 11:30", title: "Engineering the transition", desc: "Motorsport and the future of energy systems", guests: [
      { name: "Thomas Chevaucher", role: "Technical Engineering Director", org: "FIA", photo: "https://framerusercontent.com/images/XznIacfGjnb1esWYVtsuOKvsxg.png" },
      { name: "Antoine Magnan", role: "Strategic Advisor", org: "Hyundai Motor Group", photo: "https://framerusercontent.com/images/NvDrJ8bzh3UnRlrw1UwROODUK1w.png" },
      { name: "Thomas Fritsch", role: "Motorsport Technical Manager", org: "TotalEnergies", photo: "https://framerusercontent.com/images/HwYB5YQryMOUl4fJ7A8eboVrco.jpg" },
      { name: "Anthony Drevet", role: "", org: "Journalist", photo: "https://framerusercontent.com/images/Rpu2b4IePE2UbmF5Xnkx8Qk8sk.png", mod: true },
    ] },
    { time: "11:30 - 12:00", title: "From fragmented club data to a unified fan strategy", desc: "How the Pro League and Arenametrix built a shared fan data foundation across 14 clubs", guests: [
      { name: "Ludovic Bordes", role: "CEO & Founder", org: "Arenametrix", photo: "https://framerusercontent.com/images/YADisWu5d2ePjZu5WYkDVCldg.png" },
      { name: "Tim Vlaeminck", role: "Key Account Manager", org: "Pro League", photo: "https://framerusercontent.com/images/EtJE8zy1vR0wsbMBveECM0ebo1A.png" },
      { name: "Léo Weisse", role: "", org: "", photo: null, mod: true },
    ] },
    { time: "12:00 - 12:30", title: "What women’s football needs next in digital, data and AI", guests: [
      { name: "Lucy Mills", role: "Founder", org: "Ready Sport Global", photo: "https://framerusercontent.com/images/eZEY2a2gygCpktH5dQNqhW20A.png" },
      { name: "Stefan Lavén", role: "Founder", org: "Data Talks", photo: "https://framerusercontent.com/images/EANl9dyv7EACSc2huQO4In2r0.png" },
    ] },
    { time: "14:00 - 14:30", title: "IEI Sport Tech Delegation", guests: [
      { name: "Ran Keiny", role: "Head of the Economic and Trade Mission to France", org: "Embassy of Israel in Paris", photo: "https://framerusercontent.com/images/CqlmyYhWj7X4NWNlrwW6WQN1hPk.png" },
      { name: "Omri Lifschitz", role: "European Sales Executive Manager", org: "PLAY LEAP", photo: "https://framerusercontent.com/images/mz3S7ml1MVznXjuwsnGHg5XM.png" },
    ] },
    { time: "14:30 - 15:30", title: "ATP x LALIGA MBA Showcase", desc: "Preparing star athletes for life after professional sport", guests: [
      { name: "João Sousa", role: "4x ATP Champion", org: "Former ATP Tennis Player", photo: "https://framerusercontent.com/images/sNFOiJLRl9naPKBc21PZ72VleVo.png" },
      { name: "Roberto Jimenez Gago", role: "Player Relations", org: "LaLiga", photo: "https://framerusercontent.com/images/MieViKd9KUvvG0fJJZPkZEaU.png" },
      { name: "Juanjo Martin", role: "Player Relations Senior Manager", org: "ATP Tour", photo: "https://framerusercontent.com/images/KvdLUlCLsXEbQVXVIaU1bHXKq0.jpg" },
      { name: "Jose Moya Gomez", role: "Director", org: "LaLiga Business School ", photo: "https://framerusercontent.com/images/nbUdcYk4v8coyCdiy8bYZqB4VJA.png" },
    ] },
    { time: "15:30 - 16:00", title: "Ticketing & Revenue Management", desc: "Insights from PSG & Angers SCO", guests: [
      { name: "Thibault Jaillet Lébé", role: "Head of Revenue Strategy & Business Intelligence", org: "Paris Saint-Germain", photo: "https://framerusercontent.com/images/hFJ9j7d1BHTxRx9APvPf68jg.png" },
      { name: "Gaspard Le Roux", role: "Head of Ticketing & CRM", org: "Angers SCO", photo: "https://framerusercontent.com/images/W3fQtciSYBVNOdy2Q8da88Hy0JM.png" },
      { name: "Baptiste Jourdan", role: "Chief Revenue Officer", org: "EVENTORI", photo: "https://framerusercontent.com/images/i3bCSGwMUQh081OjPCDx2DbF5zc.png" },
      { name: "Tom Petit Vallois", role: "", org: "SPORT[GEN] Summit", photo: "https://framerusercontent.com/images/9HIJG4jG8g3RYZnocxnLCoq6Hs.png", mod: true },
    ] }
    ],
    'elysee-28': [
    { time: "10:00 - 10:30", title: "New frontiers for professional football", desc: "What exactly does digital transformation mean for football clubs?", guests: [
      { name: "Timm Jager", role: "CEO", org: "Eintracht Tech", photo: "https://framerusercontent.com/images/AVYF03JtRzSxdynq5DlEV0dX8zs.png" },
      { name: "Sudarshan Gopaladesikan", role: "Technical Director", org: "Newcastle United", photo: "https://framerusercontent.com/images/7pimV4YECJqFXPcMxuD2uvTVjYU.png" },
      { name: "Par Helgosson", role: "Head of PSG Labs", org: "Paris Saint-Germain", photo: "https://framerusercontent.com/images/F3aad9HKhqwWV13yeiztdXHQQ.png" },
      { name: "Mark Hartmann", role: "Tech Entrepreneur", org: "Beyond the Athletes", photo: "https://framerusercontent.com/images/xK6N7cbwxQaDbixbMda1RZHjU.jpeg", mod: true },
    ] },
    { time: "10:30 - 11:00", title: "Building by the Lake", desc: "A look behind the innovative partnership between Como 1907 and The Players Fund", guests: [
      { name: "Andy Marston", role: "Head of Corporate Venture", org: "The Players Fund", photo: "https://framerusercontent.com/images/I6KcGTgu6gU0qfcBJKNGF95zNPI.png" },
      { name: "Giuseppe Ribaudo", role: "Strategic Revenues Lead", org: "Como 1907", photo: "https://framerusercontent.com/images/7AtD0YroQ1s7JflvlZo8j7LLpHM.png" },
      { name: "Giovanni Camisasca", role: "CEO & Founder", org: "Collecto", photo: "https://framerusercontent.com/images/6yHKBjnoxAakh5QcMsi1O9bAY.png" },
      { name: "Olivier Guiol", role: "Director", org: "Nova Consulting", photo: "https://framerusercontent.com/images/drkpWKN8BRjykEh8XKoYTGNGaZ4.png", mod: true },
    ] },
    { time: "11:00 - 11:30", title: "Brand building in women's football", desc: "A masterclass by The Women's Cup and Chicago Stars FC", guests: [
      { name: "John P Reynal", role: "CEO", org: "The Women's Cup", photo: "https://framerusercontent.com/images/b2JZeYFh2mZcZQlL77dT31cBHkk.jpeg" },
      { name: "Richard Feuz", role: "General Manager", org: "Chicago Stars FC", photo: "https://framerusercontent.com/images/UIpPiJ6MuRNXepgFqlhzAdsj9c.jpg" },
      { name: "Myles Begley", role: "", org: "Lawyer", photo: "https://framerusercontent.com/images/ZhSoOMK3whJQIYrosXcqzu8w.png", mod: true },
    ] },
    { time: "11:30 - 11:55", title: "Ceremonies in global sports competitions", desc: "Meaning, impact and legacy", guests: [
      { name: "Roshan Soomarchun", role: "CEO & Founder", org: "LEAP Creative Studio", photo: "https://framerusercontent.com/images/OHpkQByvRYHHUqZ0XtorgFy9M.png" },
      { name: "Laurent Boillot", role: "Production Director & Senior Account Manager", org: "PRG", photo: "https://framerusercontent.com/images/sFJGlK6NfoNpamS2H0VyvDXfM.png" },
    ] },
    { time: "12:00 - 12:30", title: "IFAF PLAY Media launch", desc: "Flag football, data and the start-up IF", guests: [
      { name: "Pierre Trochet", role: "President", org: "IFAF", photo: "https://framerusercontent.com/images/7J21ZapnjcTFwvMlbvdFFvS9n0I.png" },
      { name: "Peter Anderson", role: "Journalist", org: "Bein Sports", photo: "https://framerusercontent.com/images/uu2QdsBY5TtD51CLsso4Eo9jrc.png", mod: true },
    ] },
    { time: "14:00 - 14:30", title: "Excellence and boldness", desc: "How sports contribute to France's attractiveness", guests: [
      { name: "Adam Oubuih", role: "CEO", org: "Atout France", photo: "https://framerusercontent.com/images/GRz3VzXtWr6LZ4GfkibNfDmuQ.png" },
      { name: "Arnaud Burlin", role: "CEO", org: "Viparis", photo: "https://framerusercontent.com/images/kCakZDJZYduB1EcGYwcbH2btew.png" },
      { name: "Sophie Lorant", role: "President", org: "France Sport Expertise", photo: "https://framerusercontent.com/images/5LFQmZrNTMrQhoWy7AoP2qzbSQ.png", mod: true },
    ] },
    { time: "14:30 - 14:50", title: "Operating scalability & resilience", desc: "Delivering modern and mega-events accros multiple venues, cities & stakeholders", guests: [
      { name: "Ingo Rehnert", role: "Executive Board Member", org: "PRG", photo: "https://framerusercontent.com/images/mtaNeEsGV8buGMBv7nCRE2rv7p4.png" },
      { name: "Christophe Veau-Cahon", role: "President", org: "GL Events Audiovisual & Power", photo: "https://framerusercontent.com/images/l2bWr71KUWVsTdj4oWNq6Gkek.png" },
    ] }
    ],
  };

  const socials = {
    linkedin: 'https://www.linkedin.com/company/sportgen-summit/',
    instagram: 'https://www.instagram.com/sportgensummit/',
    x: 'https://x.com/SportGenSummit',
  };

  window.SGData = {
    heroVideo, foundingLogo: CDN + 'c2mRXIJQpZi8ck3KGrvcjObcIoE.png',
    speakersHome, speakersAll, reelSpeakers, weeklyReel, reels, marquee, walls, partnerTiers, stats, tickets, socials,
    snapshotStats, snapshotAttendees, snapshotPdf,
    opportunities, oppStar, personas, homeFeatures, tracks, startupSteps, startupWinners, startupJury, startupFaq, startup, interests, agendaLive,
  };
})();
