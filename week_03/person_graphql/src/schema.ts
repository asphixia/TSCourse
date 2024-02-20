// schema.ts
import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Person {
    id: ID!
    name: String!
    age: Int!
    addresses: [Address]
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    zipCode: String!
    persons: [Person]
  }

  type Query {
    people: [Person]
    addresses: [Address]
    personByPhoneNumber(phoneNumber: String!): Person
    addressesByZipCode(zipCode: String!): [Address]
  }

  type Mutation {
    addPerson(name: String!, age: Int!): Person
    addAddress(street: String!, city: String!, zipCode: String!): Address
    addPersonToAddress(personId: ID!, addressId: ID!): Person
    removePersonFromAddress(personId: ID!, addressId: ID!): Person
    deletePerson(id: ID!): Boolean
  }
`;

const people: Person[] = [];
const addresses: Address[] = [];

export const resolvers = {
  Query: {
    people: () => people,
    addresses: () => addresses,
    personByPhoneNumber: (parent, { phoneNumber }, context, info) => {
      return people.find(person => person.phone === phoneNumber);
    },
    addressesByZipCode: (parent, { zipCode }, context, info) => {
      return addresses.filter(address => address.zipCode === zipCode);
    }
  },
  Mutation: {
    addPerson: (parent, { name, age }, context, info) => {
      const newPerson = { id: String(people.length + 1), name, age, addresses: [] };
      people.push(newPerson);
      return newPerson;
    },
    addAddress: (parent, { street, city, zipCode }, context, info) => {
      const newAddress = { id: String(addresses.length + 1), street, city, zipCode, persons: [] };
      addresses.push(newAddress);
      return newAddress;
    },
    addPersonToAddress: (parent, { personId, addressId }, context, info) => {
      const person = people.find(person => person.id === personId);
      const address = addresses.find(address => address.id === addressId);
      if (person && address) {
        person.addresses.push(address);
        address.persons.push(person);
        return person;
      }
      return null;
    },
    removePersonFromAddress: (parent, { personId, addressId }, context, info) => {
      const person = people.find(person => person.id === personId);
      const address = addresses.find(address => address.id === addressId);
      if (person && address) {
        person.addresses = person.addresses.filter(addr => addr.id !== addressId);
        address.persons = address.persons.filter(per => per.id !== personId);
        return person;
      }
      return null;
    },
    deletePerson: (parent, { id }, context, info) => {
      const index = people.findIndex(person => person.id === id);
      if (index !== -1) {
        people.splice(index, 1);
      }
    }
