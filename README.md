noterecognizer
==============
Copy/paste rewrite of my senior project back in 2007 except in JavaScript. 
The state of the project is that it would get pretty good at recognizing
music if you limited yourself to one shape per stroke (so a filled in note
would be done all at once without lifting the pen instead of outline and then
filling in). This was limited to quarter, half, and whole notes + rests, but 
it was able to handle polyphony and ledger lines.

The original leveraged the .net inking libraries, so there's some reinvention 
being done here, but there's not that much that's not terrible college kid 
code. In any case, it's an area/opportunity to clean it up later or use as a 
basis for other code.