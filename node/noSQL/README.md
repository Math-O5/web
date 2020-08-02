## Aluno
Nome: Mathias Fernandes Duarte Coelho
NUSP: 10734352
WEB

## Questions

1. 

a. What is the CAP theorem H

CAP stands for Consistency, Availability, Partition tolerance. Consistency is about the confidence of information, it say how much is confidency you can have about the data you are reading in any node. Availabity is about the system can always retrieve the information. Partition ensures that the system stay does not fail.

b. How is it related to NoSQL systems? Which CAP requirement MongoDB does not implement? 

NoSQL is a database which ensure two os the requirements of CAP. CP or PA, the all CAP is not possible, because when you increase Consistency, the Availability falls. MongoDB implement all CAP, but the priority is about CP. Two caracterists made in [3] can be verificaded: 
    "When Primary node goes down: system becomes unavailable until a new primary is selected."
    "When Primary node looses connection from too many Secondary nodes: system becomes unavailable. Other secondaries will try to elect a new Primary and current primary will step down."

2. What are the different main types of NoSQL databases? Include a small description of each type. 
    There are four main types of NoSQL databases.
    
    key-value store, document store, column-oriented database, and graph database.

    a. COLUMN-ORIENTED: Relational databases is row-oriented, but in column-oriented, all column is a table related with others by index. In this way, add one column is an easy operation, unlikely, add a new rows is expensive since all table will be modify and all indexes. Obs. They are no full normalization (ACID).

    b. KEY-VALUE STORES: It's like a commun map, the a key brings acoplated a value.
    Example:
      { 
        "Key-one" : "This-is-this"
        "Key-Two" : 3
      }
    The data can be arrays, numbers, strings, and so on.

    c. DOCUMENT STORES: This is a subclass of Key-Store, they encapsule the in a standard format,to the document it is storing, like a METADATA. The MongoDB is document store.

    d. graph database: As the name says, it is the data represent as a graph, where the entity is a note and edge are the relationship.

3. complete_api

    serviços em http://localhost:3000/product/
    serviços em http://localhost:3000/clients/
    serviços em http://localhost:3000/orders/

4. petService

    serviços em http://localhost:3000/service/
    serviços em http://localhost:3000/service/partner/hours

Source:
[1](CAP Theorem) https://www.educative.io/edpresso/what-is-the-cap-theorem
[2](CAP Theorem) https://www.youtube.com/watch?v=qTV6l50ngz8
[3](CAP and MongoDB) https://stackoverflow.com/questions/11292215/where-does-mongodb-stand-in-the-cap-theorem
[4](NoSQL-Database-Types) https://dzone.com/articles/nosql-database-types-1
[5](Rank type DP) https://db-engines.com/en/ranking 