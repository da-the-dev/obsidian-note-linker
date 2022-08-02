import * as React from "react";
import {NoteChangeOperation, NoteMatchingResult, TextContext} from "../../../../pkg";
import {LinkMatchesListComponent} from "./LinkMatchesListComponent";
import {handleNoteChangeOperationSelected} from "../../hooks";
import {Context} from "tern";
import {NoteMatchingResultContext} from "../../context";

interface NoteMatchingResultsListProps {
    noteMatchingResults: Array<NoteMatchingResult>,
    onClickReplaceButton: () => void
}

export const NoteMatchingResultsList = ({noteMatchingResults, onClickReplaceButton}: NoteMatchingResultsListProps) => {
    
    if (noteMatchingResults.length !== 0) return (
        <div className = "note-matching-result-list">
            <h2>Note Link Matches</h2>
            <ul className = {"hide-list-styling"}>
                {noteMatchingResults.map((noteLinkMatchResult: NoteMatchingResult) => {
                    return (
                        <NoteMatchingResultContext.Provider value={noteLinkMatchResult}>
                            <LinkMatchesListComponent key={noteLinkMatchResult.note.path + "-linkMatches"}
                                     noteLinkMatchResult={noteLinkMatchResult}
                            />
                        </NoteMatchingResultContext.Provider>
                    )
                })}
            </ul>
            <button onClick={onClickReplaceButton}>🔗 Link selected</button>

        </div>
    );
    else return (
        <div className={"info-toast"}>👀 No notes to link could be found.</div>
    )
};
