# How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

# Master Interface
A master interface is a full data structure that contains all properties of an object.Sometimes we don’t need all properties everywhere in the project.

# Problem Without Pick and Omit
We repeat the same interface again and again.
Code becomes duplicated.
Hard to maintain.
Changes must be done in multiple places.

# Pick:
Pick creates a new type by selecting only needed properties from a full interface.

# Omit:
Omit creates a **new type by removing unwanted properties** from a full interface.

# How they prevent duplication
Pick and Omit prevent code duplication by:
Reusing one master interface.
Not rewriting the same properties again.
Creating new types automatically from existing one.

