import { GraphbackContext, GraphbackCRUDService } from 'graphback';
import { Todo } from './generated-types';

/**
 * Overriding context to add GraphQL-Code-Generator typings to Graphback services
 */
export interface GraphQLContext extends GraphbackContext {
  graphback: {
    Todo: GraphbackCRUDService<Todo>;
  };
}
